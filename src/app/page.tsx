'use client'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

import mw2Box from '../../public/gameart/mw2-box.png'
import mw3Box from '../../public/gameart/mw3-box.png'
import bo6Box from '../../public/gameart/bo6-box.png'

import champs from '../../public/images/champ-club.png'
import Background from '@/components/background'
import { colors } from '@/lib/consts'

export default function Home() {
  return (
    <Main>
      <Background img="/images/home-bg.jpg" />
      <Content style={{ position: 'relative' }}>
        <Heading>
          <Champ src={champs} alt="The Champions Club" />
          <h2>
            <span>Welcome...</span>&nbsp;<span>To the Champions Club</span>
          </h2>
        </Heading>
        <Grid>
          <BoxArt href="/bo6" $hover={colors.bo6}>
            <Image src={bo6Box} alt="Black Ops 6" />
          </BoxArt>

          <BoxArt href="/mw3" $hover={colors.mw3}>
            <Image src={mw3Box} alt="Modern Warfare III" />
          </BoxArt>
          <BoxArt href="/mw2" $hover={colors.bo6}>
            <Image src={mw2Box} alt="Modern Warfare II" />
          </BoxArt>
        </Grid>
      </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Champ = styled(Image)`
  max-height: 100px;
  height: auto;
  width: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  grid-gap: 60px;
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
  opacity: 0.7;
  &:hover {
    box-shadow: 0 0 15px ${({ $hover }) => $hover};
    opacity: 1;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Heading = styled.div`
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  background: #141a1d;
  box-shadow: 0 4px 8px #0d1113;
  max-width: max-content;
  width: 100%;
  h2 {
    margin: 20px 0 0;
  }
`
