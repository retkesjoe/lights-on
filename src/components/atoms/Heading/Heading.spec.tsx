import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { componentsTestIds } from '@/components/constants/componentsTestIds.constant'
import { Heading } from '.'

describe('<Heading/>', () => {
  test('renders h1 as default variant', () => {
    render(<Heading />)
    expect(screen.getByTestId(componentsTestIds.heading1)).toBeTruthy()
  })

  test('renders h2 with children', () => {
    render(<Heading variant="h2">Text</Heading>)
    expect(screen.getByTestId(componentsTestIds.heading2)).toBeTruthy()
    expect(screen.queryByText('Text')).toBeTruthy()
  })

  test('renders h3', () => {
    render(<Heading variant="h3" className="text-slate-300" />)
    expect(screen.getByTestId(componentsTestIds.heading3)).toBeTruthy()
    expect(screen.getByTestId(componentsTestIds.heading3)).toHaveStyle(
      'color: rgb(203 213 225 / 1)',
    )
  })

  test('renders h4', () => {
    render(<Heading variant="h4" />)
    expect(screen.getByTestId(componentsTestIds.heading4)).toBeTruthy()
  })

  test('renders h5', () => {
    render(<Heading variant="h5" />)
    expect(screen.getByTestId(componentsTestIds.heading5)).toBeTruthy()
  })
})
