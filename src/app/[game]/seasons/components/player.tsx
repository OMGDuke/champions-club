import Image from 'next/image'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Player } from '../../../../../types/player'

type Props = {
  player: Player
  name: string
  wins: number
  playerArt: string
}

export default function Player({ player, name, wins, playerArt }: Props) {
  const medal = useMemo(() => {
    if (wins >= 20) return '#D6AF36'
    if (wins >= 10) return '#A7A7AD'
    if (wins >= 5) return '#A77044'
    return null
  }, [wins])

  return (
    <Container>
      <Avatar
        $medal={medal}
        src={player.avatarUrl}
        alt={name}
        height={100}
        width={100}
      />
      <Name>{name}</Name>
      <Wins>
        {wins} Win{wins > 1 ? 's' : ''}
      </Wins>
      <OperatorContainer>
        <Image
          src={playerArt}
          width={80}
          height={100}
          alt={`${name}`}
          quality={100}
        />
      </OperatorContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    'avatar name operator'
    'avatar wins operator';
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

const OperatorContainer = styled.div`
  position: relative;
  grid-area: operator;
  height: 100px;
  width: 80px;
`
