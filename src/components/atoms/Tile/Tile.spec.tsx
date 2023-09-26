import React from 'react'
import { render, screen } from '@testing-library/react'

import { componentsTestIds } from '@/components/constants/componentsTestIds.constant'
import { Tile } from '.'

describe('<Tile/>', () => {
  it('renders', () => {
    render(<Tile />)
    expect(screen.getByTestId(componentsTestIds.tile)).toBeTruthy()
  })
})
