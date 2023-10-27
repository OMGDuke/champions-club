'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

export default function Background({ img, repeat, alt }) {
  return <Bg src={img} alt={alt} fill sizes="100vw" quality={100} />
}

const Bg = styled(Image)`
  height: 100vh;
  object-fit: cover;
  object-position: center;
  height: 100vh;
  /* Overwrite next/image position: absolute */
  position: fixed !important;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`
