'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

import { FaTrophy } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <Nav>
      <Anchor href="/" $selected={pathname === '/'}>
        <FaTrophy /> <div>Champions Club</div>
      </Anchor>
      <Anchor href="/mw2" $selected={pathname === '/mw2'}>
        MW2
      </Anchor>
      <Disabled>MW3</Disabled>
    </Nav>
  )
}

const Nav = styled.nav`
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(22px);
  display: flex;
  align-items: center;
  margin: 20px 20px 0;
  z-index: 10;
  position: relative;
`

const Anchor = styled(Link)<{ $selected: boolean }>`
  text-decoration: ${({ $selected }) => ($selected ? 'underline' : 'none')};
  cursor: pointer;
  color: var(--foreground-rgb);
  pointer-events: auto;
  display: flex;
  font-size: 20px;
  padding: 10px 20px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  div {
    margin-left: 6px;
  }
`

const Disabled = styled.div`
  cursor: not-allowed;
  color: #bdbcbc;
  display: flex;
  font-size: 20px;
  padding: 10px;
`