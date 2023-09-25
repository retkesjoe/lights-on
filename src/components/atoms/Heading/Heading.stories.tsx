import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './'

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    variant: 'h1',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Heading>

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Short',
    className: '',
  },
}
