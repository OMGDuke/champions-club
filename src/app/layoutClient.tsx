'use client'

import React, { ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

type Props = { children: ReactNode }

export default function LayoutClient({ children }: Props) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#7ac32c"
        options={{ showSpinner: false }}
        shallowRouting={false}
      />
    </>
  )
}
