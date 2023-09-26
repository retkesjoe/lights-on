import React, { HTMLProps } from 'react'
import cn from 'classnames'

import { componentsTestIds } from '@/components/constants/componentsTestIds.constant'

/**
 *
 */
interface ITile extends HTMLProps<HTMLDivElement> {
  isActive?: boolean
}

/**
 * @name Tile
 * @category Atom
 * @description Atomic building element that is the main game item. Each tile
 * represents a light. The tile changes its colour when it's active or hovered.
 *
 * @param {ITile} [props] - Optional paramter that could include all the
 * properties of the HTMLDivElement interface.
 * @param {boolean} [props.isActive=false] - Optional parameter with a default
 * false value. Represents if the light is on or off.
 *
 * @returns {JSX.Element} Returns with a single tile.
 */
export const Tile = ({ isActive = false, ...props }: ITile) => {
  const customClassNames = cn(
    'md:w-28 md:h-28 sm:w-16 sm:h-16 w-12 h-12 border-2 border-slate-500 transition-all duration-700',
    {
      'bg-slate-300': isActive,
      'hover:bg-slate-300': !isActive,
      'hover:bg-slate-100': isActive,
    },
  )

  return (
    <div
      className={customClassNames}
      data-testid={componentsTestIds.tile}
      {...props}
    />
  )
}
