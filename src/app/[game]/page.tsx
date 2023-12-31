import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import { Metadata } from 'next'

import Seasons from '@/app/[game]/seasons/seasons'
import Loading from '@/app/[game]/seasons/loading'

import Hero from '@/components/hero'
import Background from '@/components/background'

type Props = {
  params: {
    game: 'mw2' | 'mw3'
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name =
    params.game === 'mw2' ? 'Modern Warfare II' : 'Modern Warfare III'
  return {
    title: `${name} | The Champions Club`,
    description: `${name} | Welcome... To the Champions Club`
  }
}

export default async function Game({ params: { game } }: Props) {
  if (game !== 'mw2' && game !== 'mw3') {
    redirect('/')
  }

  return (
    <div>
      <Background
        img={game === 'mw2' ? '/gameart/mw2-bg.jpg' : '/gameart/mw3-bg.png'}
      />
      <div style={{ position: 'relative' }}>
        <Hero></Hero>
        <Suspense fallback={<Loading />}>
          <Seasons game={game} />
        </Suspense>
      </div>
    </div>
  )
}
