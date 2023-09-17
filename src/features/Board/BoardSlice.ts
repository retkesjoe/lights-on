import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { EGameDifficulty } from '@/types/game.types'

const initialState = {
  board: new Array(5).fill(new Array(5).fill(0)),
}

export const board = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    initialize: (state, action: PayloadAction<EGameDifficulty>) => {
      const difficutly = action.payload
      state.board = new Array(difficutly).fill(new Array(difficutly).fill(0))
    },
  },
})
