'use client'

import { hexToHueRotate } from '@/lib/helpers'
import {
  calculateTimeRemaining,
  formatDate,
  getDaysBetween
} from '@/lib/helpers/dates'
import Image from 'next/image'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import Player from './player'

import lightBar from '../../../../../public/images/light-border.png'

type Props = {
  season: {
    endDate: string
    season: number | string
    seasonLength: number
    startDate: string
    artUrl: string
    blogUrl: string
    accentColour: string
    description: string
  }
  wins: {
    players: {
      name: string
      wins: number
    }[]
  }
  players: {
    [playerName: string]: {
      avatarUrl: string
      awardTitle: string
      awardDescription: string
    }
  }
}

export default function Season({ season, wins, players }: Props) {
  const hueRotate = useMemo(
    () => hexToHueRotate(season.accentColour),
    [season.accentColour]
  )
  const seasonLength = useMemo(
    () => getDaysBetween(new Date(season.startDate), new Date(season.endDate)),
    [season.endDate, season.startDate]
  )
  const daysRemaining = useMemo(
    () =>
      calculateTimeRemaining(
        new Date(season.startDate),
        new Date(season.endDate)
      ),
    [season.endDate, season.startDate]
  )
  return (
    <Container id={`season-${season.season}`}>
      <Header>
        <ArtContainer
          $color={season.accentColour}
          href={season.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={season.artUrl}
            height={1080}
            width={1920}
            alt={`Season ${season.season}`}
            sizes="(max-width: 1060px) 100vw, 486px"
          />
        </ArtContainer>

        <Title $color={season.accentColour}>
          Season {`${season.season}`.replace('R', ' Reloaded')}
        </Title>
        <Dates>
          {formatDate(season.startDate)} to {formatDate(season.endDate)}
        </Dates>
        <DatesLength>
          {seasonLength} Days Long{daysRemaining ? ` | ${daysRemaining}` : ''}
        </DatesLength>
        <Description>{season.description}</Description>
      </Header>
      <Players>
        {wins.players
          .filter((player) => player.wins > 0)
          .map((player) => (
            <Player
              key={`season-${season.season}-${player.name}`}
              player={{ ...player, ...players[player.name] }}
            />
          ))}
      </Players>
      <LightBarContainer>
        <LightBar src={lightBar} $hueRotate={hueRotate} alt="Going Dark" />
      </LightBarContainer>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0 0;
  scroll-margin-top: 100px;
`

const Header = styled.div`
  grid-gap: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content max-content 1fr;
  grid-template-areas: 'art name' 'art dates' 'art dates-length' 'art description';
  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content max-content 1fr;
    grid-template-areas: 'art' 'name' 'dates' 'dates-length' 'description';
  }
`

const Title = styled.h3<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 24px;
  @media (max-width: 1060px) {
    margin-top: 20px;
  }
`

const ArtContainer = styled.a<{ $color: string }>`
  aspect-ratio: 16 / 9;
  width: 100%;
  position: relative;
  grid-area: art;
  box-shadow: 0 0 16px 4px ${({ $color }) => $color};
  border: 2px solid ${({ $color }) => $color};
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`

const Dates = styled.div`
  grid-area: dates;
  color: #ccc;
  font-size: 18px;
`

const DatesLength = styled.div`
  grid-area: dates-length;
  color: #ccc;
  font-size: 18px;
`

const Description = styled.div`
  font-size: 20px;
`

const Players = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 40px;
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`
const LightBarContainer = styled.div`
  display: relative;
  height: 225px;
`
const LightBar = styled(Image)<{ $hueRotate: string }>`
  width: 100%;
  height: auto;
  filter: grayscale(1) sepia(1) hue-rotate(${({ $hueRotate }) => $hueRotate}deg)
    saturate(4);
`
