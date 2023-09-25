import React, { HTMLProps, createElement } from 'react'

import { componentsTestIds } from '@/components/constants/componentsTestIds.constant'

type THeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface IHeading extends HTMLProps<HTMLHeadingElement> {
  variant?: THeadingVariants
}

const STailwindClasses: Record<
  THeadingVariants,
  HTMLProps<HTMLHeadingElement> & { ['data-testid']: string }
> = {
  h1: {
    className: 'text-6xl',
    ['data-testid']: componentsTestIds.heading1,
  },
  h2: {
    className: 'text-4xl',
    ['data-testid']: componentsTestIds.heading2,
  },
  h3: {
    className: 'text-2xl',
    ['data-testid']: componentsTestIds.heading3,
  },
  h4: {
    className: 'text-lg',
    ['data-testid']: componentsTestIds.heading4,
  },
  h5: {
    className: 'text-md',
    ['data-testid']: componentsTestIds.heading5,
  },
}

/**
 * @name Heading
 * @category Atom
 * @description Atomic heading element with predefined `classNames` and
 * `data-testids`. It can be `h1...5`
 *
 * @param {IHeading} props - It inherits methods and properties from the
 * HTMLElement interface. In addition a variant property to define the type of
 * the Element
 *
 * @example
 * ```
 * // It will render an <h1 data-testid='heading1'>Hello World</h1>
 * <Header>Hello world!</Header>
 * ```
 *
 * @returns {JSX.Element} - It returns a heading element depending on the variant.
 */
export const Heading = ({ variant = 'h1', ...props }: IHeading) => {
  return createElement(variant, {
    ...STailwindClasses[variant],
    ...props,
    className: `
      ${STailwindClasses[variant].className}
      ${props.className}
    `,
  })
}
