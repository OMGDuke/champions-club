'use client'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

import mw2Box from '../../public/gameart/mw2-box.png'
import mw3Box from '../../public/gameart/mw3-box.png'

import champs from '../../public/images/champ-club.png'
import Background from '@/components/background'

export default function Home() {
  return (
    <Main>
      <Background img="/images/home-bg.jpg" />
      <div style={{ position: 'relative' }}>
        <Champ src={champs} alt="The Champions Club" />
        <h2>Welcome... To the Champions Club</h2>
        <Grid>
          <BoxArt href="/mw2" $hover="#7ac32c">
            <Image src={mw2Box} alt="Modern Warfare II" />
          </BoxArt>
          <BoxArt href="/mw3" $disabled $hover="#d60000">
            <Image src={mw3Box} alt="Modern Warfare III" />
            <Note>
              <div>Season 1 Begins</div>
              <div>05/12/2023</div>
            </Note>
          </BoxArt>
        </Grid>
      </div>
    </Main>
  )
}

const Main = styled.main`
  padding: 60px 20px;
  text-align: center;
  h2 {
    margin: 20px;
  }
`

const Champ = styled(Image)`
  max-height: 100px;
  width: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  grid-gap: 60px;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const BoxArt = styled(Link)<{ $disabled?: boolean; $hover: string }>`
  filter: grayscale(${({ $disabled }) => ($disabled ? 1 : 0)});
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px ${({ $hover }) => $hover};
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Note = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 10px;
  background-color: rgb(var(--tile-start-rgb));
  padding: 10px;
  border-radius: 8px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  color: var(--);
`
