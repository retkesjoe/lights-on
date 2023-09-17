import React from 'react'
import { render, screen } from '@testing-library/react'

import { testIds } from '@/constants/testIds.constant'
import { Layout } from '@/components'

describe('<Layout>', () => {
  it('should render the Layout component', () => {
    render(
      <Layout>
        <h1>Hello World!</h1>
      </Layout>,
    )

    expect(screen.getByTestId(testIds.layout)).toBeTruthy()
  })
})
