import React, { PropsWithChildren } from 'react'

/**
 * @name Item
 * @category Component
 * @description Item of the grid
 */
export const Item = (props: PropsWithChildren) => {
  const { children } = props

  return <>{children}</>
}
