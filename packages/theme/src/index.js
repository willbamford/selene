export const breakpointsMap = {
  def: 0,
  xxs: 480,
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
}

export const breakpoints = Object.values(breakpointsMap).filter(v => v !== 0)

export const spacing = [0, 1, 2, 4, 8, 16, 24, 32, 48, 64, 128]

export default {
  breakpointsMap,
  breakpoints,
  spacing,
}
