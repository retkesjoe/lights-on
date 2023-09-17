import { EGameDifficulty, IGame } from '@/types/game.types'

export const defaultGameStateMock: IGame = {
  difficulty: EGameDifficulty.EASY,
  isAudioMuted: true,
}
