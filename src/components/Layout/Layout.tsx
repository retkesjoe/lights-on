import React, { PropsWithChildren } from 'react'

import { testIds } from '@/constants/testIds.constant'

/**
 * @name Layout
 * @category Component
 * @description Main layout of the application
 *
 * @param {React.ReactNode=} props.children - rest of the content, placed inside the layout
 *
 * @returns {JSX.Element} Returns the skeletion of our app
 */
export const Layout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <div
      className="w-full h-screen dark:bg-slate-800 relative flex"
      data-testid={testIds.layout}
    >
      {children}
    </div>
  )
}
