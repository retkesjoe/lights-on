import type { Meta, StoryObj } from '@storybook/react'

import { Tile } from './'

const meta: Meta<typeof Tile> = {
  title: 'Atoms/Tile',
  component: Tile,
  args: {
    isActive: false,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tile>

export const TileLight: Story = {
  args: {
    isActive: false,
  },
}
