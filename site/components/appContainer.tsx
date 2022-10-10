import * as React from 'react'
import { NavBar } from './organisms/navbar'
import { ThemeProvider } from 'next-themes'
import { useLoaded } from '../services/commons/loaded'

export const AppContainer = () => {
  if (!useLoaded()) return null

  return (
    <ThemeProvider attribute="class">
      <div
        className="bg-light dark:bg-dark body-font font-balooChettan text-primary dark:text-light"
        style={{ height: '100vh' }}
      >
        <header>
          <NavBar />
        </header>
      </div>
    </ThemeProvider>
  )
}
