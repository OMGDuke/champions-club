'use client'

import { getChampionsOfChampions } from '@/lib/helpers'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import Champion from './components/champion'

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
    [playerName: string]: {
      avatarUrl: string
      awardTitle: string
      awardDescription: string
    }
  }
}

export default function ChampOfChamps({ wins, players }: Props) {
  const champs = useMemo(() => getChampionsOfChampions(wins), [wins])
  return (
    <Container id="season-coc">
      <h2>Champions of Champions</h2>
      <h3>Players with more than 10 wins</h3>
      <Grid>
        {champs.map((champ) => (
          <Champion
            key={`champ-${champ.name}`}
            name={champ.name}
            wins={champ.wins}
            avatar={players[champ.name].avatarUrl}
            title={players[champ.name].awardTitle}
            description={players[champ.name].awardDescription}
          />
        ))}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px 60px;
  h2,
  h3 {
    text-align: center;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px 0;
  gap: 40px;
`