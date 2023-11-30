'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  wins: number
  title: string
  description: string
  avatar: string
  game: 'mw2' | 'mw3'
}

export default function Champion({
  name,
  wins,
  title,
  description,
  avatar,
  game
}: Props) {
  return (
    <Container>
      <a
        href={`/awards${game}/${name}.png`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AwardWrapper>
          <Image
            src={`/awards${game}/${name}.png`}
            alt={name}
            height={1024}
            width={1024}
            sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 293.33px"
          />
        </AwardWrapper>
      </a>
      <MetaData>
        <div>
          <Avatar src={avatar} alt={name} height={100} width={100} />
          <Wins>
            {`${wins} Wins`.split('').map((char, i) => (
              <span
                className={wins >= 200 ? 'fire' : ''}
                key={`${name}-win-${i}`}
              >
                {char}
              </span>
            ))}
          </Wins>
        </div>
        <div>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </MetaData>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const AwardWrapper = styled.div`
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const MetaData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  background: linear-gradient(
    180deg,
    #141a1d 0%,
    #141a1d 50%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 20px 10px 30px;
  @media (max-width: 680px) {
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`

const Avatar = styled(Image)`
  box-shadow: 0px 0px 32px #d6af36;
  border: 3px solid #d6af36;
`

const Name = styled.div`
  font-size: 20px;
`
const Title = styled.div`
  font-size: 24px;
`
const Description = styled.div`
  font-size: 20px;
  color: #cccccc;
`

const Wins = styled.div`
  margin-top: 100px;
  text-align: center;
  color: #cccccc;
  span.fire {
    color: #f5f5f5; /* Light text color */
    text-align: center; /* Center alignment of text */
    font-family: 'Courier New', Courier, monospace; /* Monospace font */
    font-size: 80px; /* Text size */
    /* Multi-layered text-shadow for fire effect */
    text-shadow:
      0px -1px 3px #fff,
      /* Innermost layer - intense heat (white) */ 0px -2px 6px #ff3,
      /* Second layer - core of flame (yellow) */ 0px -6px 12px #f90,
      /* Middle layer - body of flame (orange) */ 0px -10px 20px #c33; /* Outermost layer - edges of flame (red) */
  }

  /* Define the animation named "flicker" */
  @keyframes flicker {
    /* Initial state of animation */
    0%, 
    /* Final state of animation */
    100% {
      text-shadow:
        0 -1px 3px #fff,
        /* Innermost layer - intense heat (white) */ 0 -2px 6px #ff3,
        /* Second layer - core of flame (yellow) */ 0 -6px 12px #f90,
        /* Middle layer - body of flame (orange) */ 0 -10px 20px #c33; /* Outermost layer - edges of flame (red) */
    }
    /* Middle state of animation */
    50% {
      text-shadow:
        0 -2px 6px #fff,
        /* Innermost layer - intense heat (white) */ 0 -4px 12px #ff3,
        /* Second layer - core of flame (yellow) */ 0 -8px 16px #f90,
        /* Middle layer - body of flame (orange) */ 0 -12px 24px #c33; /* Outermost layer - edges of flame (red) */
    }
  }

  .fire {
    /* Apply the "flicker" animation to the .fire class */
    animation: flicker 2s infinite;
  }
`
