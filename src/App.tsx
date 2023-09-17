import React from 'react'
import * as Grid from '@features/Grid'
import { board } from './features/Board/BoardSlice'
import { useAppDispatch } from './app/hooks'
import { EGameDifficulty } from './types/game.types'

const App = () => {
  const dispatch = useAppDispatch()
  dispatch(board.actions.initialize(EGameDifficulty.MEDIUM))
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <Grid.Wrapper>
        <Grid.Row>
          <Grid.Item>Good bye</Grid.Item>
        </Grid.Row>
        <Grid.Row>
          <Grid.Item>Auf wiedersehen</Grid.Item>
        </Grid.Row>
        <Grid.Row>
          <Grid.Item>Au'revoir</Grid.Item>
        </Grid.Row>
      </Grid.Wrapper>
    </div>
  )
}

export default App
