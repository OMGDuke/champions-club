import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export default function LoadingPlayer() {
  return (
    <Container>
      <Skeleton
        height={100}
        width={100}
        style={{ display: 'block', gridArea: 'avatar' }}
        baseColor="#666666"
        highlightColor="#999999"
      />

      <Name>
        <Skeleton
          baseColor="#666666"
          highlightColor="#999999"
          style={{ display: 'block' }}
        />
      </Name>
      <Wins>
        <Skeleton
          baseColor="#666666"
          highlightColor="#999999"
          style={{ display: 'block' }}
        />
      </Wins>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 24px 20px;
  height: 100px;
  grid-template-areas:
    'avatar name'
    'avatar wins';
  grid-gap: 10px 20px;
  background: linear-gradient(
    90deg,
    #141a1d 0%,
    #141a1d 50%,
    rgba(255, 255, 255, 0) 100%
  );
`

const Name = styled.div`
  grid-area: name;
  font-size: 24px;
`

const Wins = styled.div`
  grid-area: wins;
  font-size: 20px;
  color: #cccccc;
`
