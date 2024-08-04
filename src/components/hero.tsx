'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import champ from '../../public/images/champ-club.png'
import mw2Logo from '../../public/gameart/mw2-logo.png'
import mw3Logo from '../../public/gameart/mw3-logo.png'
import bo6Logo from '../../public/gameart/bo6-logo.png'
import { Game } from '../../types/games'

const logos = {
  mw2: mw2Logo,
  mw3: mw3Logo,
  bo6: bo6Logo
} as const

interface Properties {
  game: Game
}

const Hero: React.FC<Properties> = ({ game }) => {
  const background = `/gameart/${game}-hero.jpg`

  const logo = logos[game]

  return (
    <Container $img={background}>
      <Background $img={background} />
      <Images>
        <Image src={logo} alt="Call of Duty" height={130} />
        <Image src={champ} alt="Champions Club" width={158.47} height={130} />
      </Images>
    </Container>
  )
}

export default Hero

const Container = styled.header<{ $img: string }>`
  position: relative;
  z-index: 0;
  height: 320px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div<{ $img: string }>`
  background-image: url(${({ $img }) => $img});
  position: relative;
  background-size: cover;
  background-position: right top;
  max-width: 100vw;
  width: 100%;
  height: ${({ $img }) => ($img ? '400px' : 'auto')};
  position: absolute;
  top: -80px;
  left: 0;
  z-index: 0;
  @media (max-width: 700px) {
    background-position: center top;
  }
`

const Images = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    position: relative;
    z-index: 10;
    width: auto;
    margin: 0 auto;
  }
`
