import { redirect } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'

import Seasons from '@/app/[game]/seasons/seasons'

import Hero from '@/components/hero'
import Background from '@/components/background'
import { Game as GameType } from '../../../types/games'
import { isValidGame } from '@/lib/helpers'

type Props = {
  params: {
    game: GameType
  }
}

const backgrounds = {
  mw2: '/gameart/mw2-bg.jpg',
  mw3: '/gameart/mw3-bg.png',
  bo6: '/gameart/bo6-bg.jpg'
}

const titles = {
  mw2: 'Modern Warfare II',
  mw3: 'Modern Warfare III',
  bo6: 'Black Ops VI'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = titles[params.game]
  return {
    title: `${name} | The Champions Club`,
    description: `${name} | Welcome... To the Champions Club`
  }
}

export default async function Game({ params: { game } }: Props) {
  if (!isValidGame(game)) {
    redirect('/')
  }

  return (
    <div style={{ position: 'relative' }}>
      <Background img={backgrounds[game]} />
      <div style={{ position: 'relative' }}>
        <Hero game={game} />
        <Seasons game={game} />
      </div>
    </div>
  )
}
