import React from 'react'

import { testIds } from '@/constants/testIds.constant'
import { Button } from '@/components/Button'

export const SplashScreen = () => {
  return (
    <div
      className="splash-screen sm:container sm: mx-auto h-4/5 my-auto place-self-center flex flex-col"
      data-testid={testIds.splashScreen}
    >
      <h1 className="text-6xl text-slate-300 text-center">Lights Out</h1>

      <Button>Start game</Button>
    </div>
  )
}
