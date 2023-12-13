'use client'

import React from 'react'
import styled from 'styled-components'

import Season from './season'
import SeasonPicker from './seasonPicker'
import { formatDate } from '@/lib/helpers/dates'
import { Player } from '../../../../../types/player'

type Props = {
  seasons: {
    endDate: string
    season: number | string
    seasonLength: number
    startDate: string
    artUrl: string
    blogUrl: string
    accentColour: string
    description: string
  }[]
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
  playerArt: {
    [playerName: string]: {
      [seasonNumber: string]: string
    }
  }
}

export default function SeasonsContainer({
  seasons,
  wins,
  players,
  playerArt
}: Props) {
  return (
    <>
      <SeasonPicker seasons={seasons} />
      {seasons.filter((season) => season.artUrl?.length).length ? (
        <Grid>
          {seasons
            .filter((season) => season.artUrl?.length)
            .map((season) => (
              <Season
                key={`season-${season.season}`}
                season={season}
                wins={wins[season.season]}
                players={players}
                playerArt={playerArt}
              />
            ))}
        </Grid>
      ) : (
        <h2 style={{ textAlign: 'center', padding: '20px' }}>
          Season 1 hasnt started yet. Come back later (
          {formatDate(seasons[0].startDate)})
        </h2>
      )}
    </>
  )
}

const Grid = styled.div`
  padding: 0 20px 0;
  display: grid;
`
