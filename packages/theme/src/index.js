import { css } from 'styled-components'

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
  acc[key] = (...args) => {
    console.log('args', args)
    return css`
      @media (min-width: ${breakpoints[key] / baseFontSize}em) {
        ${css(...args)}
      }
    `
  }
  return acc
}, {})

export const spacing = [0, 1, 2, 4, 8, 16, 24, 32, 48, 64, 128]

export default {
  breakpoints,
  spacing,
  media,
}
