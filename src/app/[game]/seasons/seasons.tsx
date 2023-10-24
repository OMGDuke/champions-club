import React from 'react'

import { getPlayerData, getSeasonData, getWins } from '@/actions/googleSheets'
import SeasonsContainer from '@/app/[game]/seasons/components/seasons'
import ChampOfChamps from './champOfChamps'

type Props = {
  game: 'mw2' | 'mw3'
}

export default async function Seasons({ game }: Props) {
  const [seasons, wins, players] = await Promise.all([
    getSeasonData(game),
    getWins(game),
    getPlayerData()
  ])
  return (
    <>
      <SeasonsContainer seasons={seasons} wins={wins} players={players} />
      <ChampOfChamps wins={wins} players={players} />
    </>
  )
}
