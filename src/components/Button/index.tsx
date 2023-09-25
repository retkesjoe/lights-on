import React, { PropsWithChildren } from 'react'

import { testIds } from '@/constants/testIds.constant'
import { ButtonStyle } from './ButtonStyle'

export const Button = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <ButtonStyle className="text-3xl text-center" data-testid={testIds.button}>
      {children}
    </ButtonStyle>
  )
}
