import React from 'react'

import { board } from './features/Board/BoardSlice'
import { useAppDispatch } from './app/hooks'
import { EGameDifficulty } from './types/game.types'

import './app.css'
import { SplashScreen } from './features/SplashScreen'
import { Layout } from './components'

const App = () => {
  const dispatch = useAppDispatch()
  dispatch(board.actions.initialize(EGameDifficulty.MEDIUM))
  return (
    <Layout>
      <SplashScreen />
    </Layout>
  )
}

export default App
