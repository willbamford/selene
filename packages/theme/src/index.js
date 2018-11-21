import { css } from 'styled-components'
import { isNegative, px, num } from 'styled-system'

export const baseFontSize = 16

export const breakpoints = {
  def: 0,
  xxs: 480,
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
}

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key] / baseFontSize}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const space = [0, 1, 2, 4, 8, 16, 24, 32, 48, 64, 128]

// styled-system equivalent isn't exported
// eslint-disable-next-line no-shadow
export const getSpaceFn = space => n => {
  if (!num(n)) {
    return px(space[n] || n)
  }
  const abs = Math.abs(n)
  const neg = isNegative(n)
  const value = space[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return px(value * (neg ? -1 : 1))
}

// const createTheme = ({ breakpoints, ...rest }) => ({
//   breakpoints: {},
//   ...rest,
// })

export default {
  breakpoints,
  space,
  media,
}
