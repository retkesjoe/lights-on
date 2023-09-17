import React from 'react'

import { testIds } from '@/constants/testIds.constant'

export const SplashScreen = () => {
  return (
    <div className="splash-screen" data-testid={testIds.splashScreen}></div>
  )
}
