'use client'

import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import champ from '../../public/images/champ-club.png'
import mw2Logo from '../../public/gameart/mw2-logo.png'
import mw3Logo from '../../public/gameart/mw3-logo.png'

export default function Hero() {
  const pathname = usePathname()
  const [background, logo] = useMemo(() => {
    if (pathname === '/mw2') return ['/gameart/mw2-hero.jpg', mw2Logo]
    return ['/gameart/mw3-hero.jpg', mw3Logo]
  }, [pathname])

  return (
    <Container $img={background}>
      <Background $img={background} />
      <Images>
        <Image src={logo} alt="Modern Warfare" />
        <Image src={champ} alt="Champions Club" />
      </Images>
    </Container>
  )
}

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
    height: 130px;
    width: auto;
    margin: 0 auto;
  }
`
