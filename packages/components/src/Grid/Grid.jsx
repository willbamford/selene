import styled from 'styled-components'
import { createMediaQuery } from 'styled-system'

const DEFAULT = 'def'

// Move to primitives / system folder?
const applyMinMediaQueryCssAtBreakpoints = (breakpoints, apply) =>
  Object.keys(breakpoints)
    .map(bp => {
      const value = breakpoints[bp]
      if (value === undefined) {
        // eslint-disable-next-line no-console
        console.warn(`Warning: breakpoint '${bp}' does not exist`)
        return ''
      }
      return bp === DEFAULT
        ? apply(bp)
        : `
            ${createMediaQuery(value)} {
              ${apply(bp)}
            }
          `
    })
    .join('')

const gapBreakpoints = (gap, breakpoints) =>
  Object.keys(gap).reduce(
    (prev, curr) => ({ ...prev, ...{ [curr]: breakpoints[curr] } }),
    {},
  )

const cssForGap = gap => `
  margin: -${gap}px;
  > * {
    padding: ${gap}px;
  }
`

const cssForRowGap = rowGap => `
  margin-top: -${rowGap}px;
  margin-bottom: -${rowGap}px;
  > * {
    padding-top: ${rowGap}px;
    padding-bottom: ${rowGap}px;
  }
`

const cssForColGap = colGap => `
  margin-left: -${colGap}px;
  margin-right: -${colGap}px;
  > * {
    padding-left: ${colGap}px;
    padding-right: ${colGap}px;
  }
`

const applyGridGap = (
  { breakpointsMap: breakpoints, spacing },
  gap,
  cssForGapFn,
) => {
  if (gap === undefined) {
    return undefined
  }
  if (typeof gap === 'object') {
    return applyMinMediaQueryCssAtBreakpoints(
      gapBreakpoints(gap, breakpoints),
      breakpoint => cssForGapFn(spacing[gap[breakpoint]]),
    )
  }
  return cssForGapFn(spacing[gap])
}

const gridGap = props => applyGridGap(props.theme, props.gap, cssForGap)

const gridRowGap = props =>
  applyGridGap(props.theme, props.rowGap, cssForRowGap)

const gridColGap = props =>
  applyGridGap(props.theme, props.colGap, cssForColGap)

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  ${gridGap};
  ${gridRowGap};
  ${gridColGap};
`

export default Grid
