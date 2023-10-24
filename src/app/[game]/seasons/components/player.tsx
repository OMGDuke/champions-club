import Image from 'next/image'
import React, { useMemo } from 'react'
import styled from 'styled-components'

type Props = {
  player: {
    name: string
    wins: number
    avatarUrl: string
    awardTitle: string
    awardDescription: string
  }
}

export default function Player({ player }: Props) {
  const medal = useMemo(() => {
    if (player.wins >= 20) return '#D6AF36'
    if (player.wins >= 10) return '#A7A7AD'
    if (player.wins >= 5) return '#A77044'
    return null
  }, [player.wins])
  return (
    <Container>
      <Avatar
        $medal={medal}
        src={player.avatarUrl}
        alt={player.name}
        height={100}
        width={100}
      />
      <Name>{player.name}</Name>
      <Wins>
        {player.wins} Win{player.wins > 1 ? 's' : ''}
      </Wins>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: max-content 1fr;
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
const Avatar = styled(Image)<{ $medal: string | null }>`
  grid-area: avatar;
  border: 3px solid ${({ $medal }) => ($medal ? $medal : 'transparent')};
  box-shadow: 0px 0px 32px ${({ $medal }) => ($medal ? $medal : 'transparent')};
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
