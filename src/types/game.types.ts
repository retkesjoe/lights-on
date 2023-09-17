export enum EGameDifficulty {
  'EASY' = 5,
  'MEDIUM' = 10,
  'HARD' = 20,
}

export interface IGame {
  isAudioMuted: boolean
  difficulty: EGameDifficulty
}
