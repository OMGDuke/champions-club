'use client'

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
    <Outer>
      <Container>
        {seasons
          .filter((season) => season.artUrl?.length)
          .map((season) => (
            <a
              href={`#season-${season.season}`}
              key={`season-link-${season.season}`}
            >
              {season.season}
            </a>
          ))}
        <a href={`#season-hof`}>HoF</a>
      </Container>
    </Outer>
  )
}

const Outer = styled.div`
  position: sticky;
  top: 49px;
  background: rgb(10, 10, 10);
  z-index: 10;

  @media (max-width: 900px) {
    position: static;
  }
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 60px;
  margin: 0 auto;
  max-width: max-content;

  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 60px);
    grid-auto-flow: unset;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 60px);
    grid-auto-flow: unset;
  }
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
