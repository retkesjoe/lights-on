import React, { PropsWithChildren } from 'react'

/**
 * @name Row
 * @category Component
 * @dscription Wrapping the grid item elements
 *
 * @returns {JSX.Element} JSX.Element
 */
export const Row = (props: PropsWithChildren) => {
  const { children } = props

  return <div>{children}</div>
}
