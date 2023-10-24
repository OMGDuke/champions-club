'use client'

import React from 'react'
import styled from 'styled-components'

type Props = {
  img: string
  repeat?: boolean
}

export default function Background({ img, repeat }: Props) {
  return <Bg $img={img} $repeat={repeat} />
}

const Bg = styled.div<{ $img: string; $repeat: boolean | undefined }>`
  height: 100vh;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-repeat: ${({ $repeat }) => ($repeat ? '' : 'no-')}repeat;
  background-position: center;
  height: 100vh;
  position: fixed;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`
