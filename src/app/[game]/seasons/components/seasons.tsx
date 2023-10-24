'use client'

import React from 'react'
import styled from 'styled-components'

import Season from './season'
import SeasonPicker from './seasonPicker'

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
    [playerName: string]: {
      avatarUrl: string
      awardTitle: string
      awardDescription: string
    }
  }
}

export default function SeasonsContainer({ seasons, wins, players }: Props) {
  return (
    <>
      <SeasonPicker seasons={seasons} />
      <Grid>
        {seasons.map((season) => (
          <Season
            key={`season-${season.season}`}
            season={season}
            wins={wins[season.season]}
            players={players}
          />
        ))}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  padding: 60px 20px;
  display: grid;
`
