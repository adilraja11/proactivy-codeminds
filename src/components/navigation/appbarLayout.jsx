import React from 'react'
import { Appbar } from './appbar'

export const AppbarLayout = ( {children} ) => {
  return (
    <main>
        <Appbar/>
        <div>{children}</div>
    </main>
  )
}
