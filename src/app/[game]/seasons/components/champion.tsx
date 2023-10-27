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
}

export default function Champion({
  name,
  wins,
  title,
  description,
  avatar
}: Props) {
  return (
    <Container>
      <a href={`/awards/${name}.png`} target="_blank" rel="noopener noreferrer">
        <AwardWrapper>
          <Image
            src={`/awards/${name}.png`}
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
          <Wins>{wins} Wins</Wins>
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
  text-align: center;
  color: #cccccc;
`
