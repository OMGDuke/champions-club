'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
}

export default function SeasonPicker({ seasons }: Props) {
  return (
    <Container>
      {seasons.map((season) => (
        <Link
          href={`#season-${season.season}`}
          key={`season-link-${season.season}`}
          shallow
        >
          {season.season}
        </Link>
      ))}
      <Link href={`#season-coc`} shallow>
        CoC
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 60px;
  margin: 0 auto;
  max-width: max-content;
  a {
    padding: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
  }
  a:hover {
    background: rgba(255, 255, 255, 0.5);
    color: black;
  }
`