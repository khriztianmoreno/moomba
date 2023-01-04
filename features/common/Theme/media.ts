import omit from 'lodash/omit'
import { css, Interpolation, SerializedStyles } from '@emotion/react'

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 420,
  md: 768,
  lg: 1280,
  xl: 1750,
}

export interface Layout {
  section: {
    padding: {
      desktop: number
      mobile: number
      tablet: number
    }
  }
}

export const layoutSizes: Layout = {
  section: {
    padding: {
      desktop: 5,
      mobile: 3,
      tablet: 4,
    },
  },
}

/**
 * Creates a general rules for hover state. Also, prevent CSS hover on touch devices
 * @param template
 * @param args
 */
const hover = (parent = '&', child: '') => (template, ...args) => css`
  @media not all and (pointer: coarse) {
    ${parent}:hover ${child} {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      ${css(template, ...args)}
    }
  }

  ${parent}.hover ${child} {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    ${css(template, ...args)}
  }
`

export interface MediaQuery {
  sm(template, ...args): SerializedStyles
  md(template, ...args): SerializedStyles
  lg(template, ...args): SerializedStyles
  xl(template, ...args): SerializedStyles
  hover: (parent, child) => (template, ...args) => SerializedStyles
}

/**
 * Util for add media queries to styled components based on the breakpoints
 *
 * Example:
 *
 * const Button = styled('button')`
 *  color: red;
 *  ${media.md`
 *    color: blue;
 *  `}
 * `
 */
const media: MediaQuery = Object.keys(omit(breakpoints, ['xs'])).reduce(
  (accumulator, key: string) => {
    accumulator[key] = function(template, ...args) {
      return css`
        @media (min-width: ${breakpoints[key]}px) {
          ${css(template, ...args)};
        }
      `
    }

    return accumulator
  },
  { hover }
) as MediaQuery

export default media
