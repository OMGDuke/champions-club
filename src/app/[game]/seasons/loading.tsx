'use client'

import React from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import lightBar from '../../../../public/images/light-border.png'
import Image from 'next/image'
import LoadingPlayer from './components/loadingPlayer'

export default function Loading() {
  return (
    <Container>
      <Header>
        <ArtContainer $color="#FFFFFF">
          <Skeleton baseColor="#666666" highlightColor="#999999" />
        </ArtContainer>

        <Title>
          <Skeleton baseColor="#666666" highlightColor="#999999" />
        </Title>
        <Dates>
          <Skeleton baseColor="#666666" highlightColor="#999999" />
        </Dates>
        <Description>
          <Skeleton baseColor="#666666" highlightColor="#999999" count={3} />
        </Description>
      </Header>
      <Players>
        {[0, 0, 0, 0].map((player, index) => (
          <LoadingPlayer key={`season-1-${index}`} />
        ))}
      </Players>
      <LightBarContainer>
        <LightBar src={lightBar} alt="Going Dark" />
      </LightBarContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 120px 20px 60px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 900px) {
    padding: 240px 20px 60px;
  }
  @media (max-width: 400px) {
    padding: 360px 20px 60px;
  }
`

const Header = styled.div`
  grid-gap: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas: 'art name' 'art dates' 'art description';
  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'art' 'name' 'dates' 'description';
  }
`

const Title = styled.h3`
  font-size: 24px;
  @media (max-width: 1060px) {
    margin-top: 20px;
  }
`

const ArtContainer = styled.div<{ $color: string }>`
  aspect-ratio: 16 / 9;
  width: 100%;
  position: relative;
  grid-area: art;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  overflow: hidden;
  span {
    border-radius: 0;
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

const Description = styled.div`
  font-size: 20px;
`

const Players = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 40px;
  grid-gap: 20px;
`
const LightBarContainer = styled.div`
  display: relative;
  height: 225px;
`
const LightBar = styled(Image)`
  width: 100%;
  height: auto;
`
