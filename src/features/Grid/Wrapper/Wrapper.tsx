import React, { PropsWithChildren } from 'react'

import { testIds } from '@constants/testIds.constant'

/**
 * @name Wrapper
 * @category Component
 * @description Wrapping the rows of the grid
 */
export const Wrapper = (props: PropsWithChildren) => {
  const { children } = props

  return <div data-testid={testIds.gridWrapper}>{children}</div>
}
