import { createSlice } from '@reduxjs/toolkit'

import { defaultGameStateMock } from '@/mocks/game.mocks'

export const game = createSlice({
  name: 'game',
  initialState: defaultGameStateMock,
  reducers: {
    toggleAudio: (state) => {
      state.isAudioMuted = !state.isAudioMuted
    },
  },
})
