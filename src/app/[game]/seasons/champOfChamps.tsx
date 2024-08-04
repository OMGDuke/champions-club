'use client'

import { getHallOfFame } from '@/lib/helpers'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import Champion from './components/champion'
import { Player } from '../../../../types/player'
import { Game } from '../../../../types/games'

type Props = {
  wins: {
    [seasonNumber: string | number]: {
      players: {
        name: string
        wins: number
      }[]
    }
  }
  players: {
    [playerName: string]: Player
  }
  game: Game
}

export default function ChampOfChamps({ wins, players, game }: Props) {
  const champs = useMemo(
    () =>
      getHallOfFame(wins).filter(
        (champ) => players[champ.name][`awardTitle${game}`]?.length
      ),
    [game, players, wins]
  )

  if (!champs.length)
    return (
      <Container id="season-hof">
        <h2>Hall of Fame</h2>
        <h3>Award season hasn&apos;t started yet</h3>
      </Container>
    )

  return (
    <Container id="season-hof">
      <h2>Hall of Fame</h2>
      <p>Squad members past and present</p>
      <Grid>
        {champs
          .filter((champ) => players[champ.name][`awardTitle${game}`]?.length)
          .map((champ) => (
            <Champion
              key={`champ-${champ.name}`}
              name={champ.name}
              wins={champ.wins}
              avatar={players[champ.name].avatarUrl}
              title={players[champ.name][`awardTitle${game}`]}
              description={players[champ.name][`awardDescription${game}`]}
              game={game}
            />
          ))}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  scroll-margin-top: 140px;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px 60px;
  h2,
  h3,
  p {
    text-align: center;
  }
  h3 {
    margin: 20px;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px 0;
  gap: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
