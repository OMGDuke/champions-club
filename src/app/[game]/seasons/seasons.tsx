import React from 'react'

import {
  getPlayerArt,
  getPlayerData,
  getSeasonData,
  getWins
} from '@/actions/googleSheets'
import SeasonsContainer from '@/app/[game]/seasons/components/seasons'
import ChampOfChamps from './champOfChamps'
import { Game } from '../../../../types/games'

type Props = {
  game: Game
}

export default async function Seasons({ game }: Props) {
  const [seasons, wins, players, playerArt] = await Promise.all([
    getSeasonData(game),
    getWins(game),
    getPlayerData(),
    getPlayerArt(game)
  ])
  const lastSeasonStart = new Date(
    seasons.find((season) => season.season === 6)?.startDate || ''
  )
  const isAwardsSeason = lastSeasonStart < new Date()

  return (
    <>
      <SeasonsContainer
        seasons={seasons}
        wins={wins}
        players={players}
        playerArt={playerArt}
      />
      <ChampOfChamps
        wins={wins}
        players={players}
        game={game}
        isAwardsSeason={isAwardsSeason}
      />
    </>
  )
}
