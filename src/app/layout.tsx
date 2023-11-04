import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/navbar'
import StyledComponentsRegistry from '@/lib/registry'
import '@/app/globals.css'
import LayoutClient from '@/app/layoutClient'

const teko = Teko({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Champions Club',
  description: 'Welcome... To the Champions Club'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={teko.className}>
        <StyledComponentsRegistry>
          <LayoutClient>
            <Navbar />
            {children}
            <Analytics />
          </LayoutClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
