import React, { PropsWithChildren } from 'react'

import { testIds } from '@/constants/testIds.constant'

export const Layout = (props: PropsWithChildren) => {
  const { children } = props
  return <div data-testid={testIds.layout}>{children}</div>
}
