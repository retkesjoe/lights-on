import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { game } from '@/features/Game/GameSlice'
import { board } from '@/features/Board/BoardSlice'

export const store = configureStore({
  reducer: {
    board: board.reducer,
    game: game.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
