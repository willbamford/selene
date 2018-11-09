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

const gapBreakpoints = (gaps, breakpoints) =>
  Object.keys(gaps).reduce(
    (prev, curr) => ({ ...prev, ...{ [curr]: breakpoints[curr] } }),
    {},
  )

const cssForGaps = gaps => `
  margin: -${gaps}px;
  > * {
    padding: ${gaps}px;
  }
`

const cssForRowGaps = rowGaps => `
  margin-top: -${rowGaps}px;
  margin-bottom: -${rowGaps}px;
  > * {
    padding-top: ${rowGaps}px;
    padding-bottom: ${rowGaps}px;
  }
`

const cssForColGaps = colGaps => `
  margin-left: -${colGaps}px;
  margin-right: -${colGaps}px;
  > * {
    padding-left: ${colGaps}px;
    padding-right: ${colGaps}px;
  }
`

const applyGridGaps = ({ breakpoints, spacing }, gaps, cssForGapsFn) => {
  if (gaps === undefined) {
    return undefined
  }
  if (typeof gaps === 'object') {
    return applyMinMediaQueryCssAtBreakpoints(
      gapBreakpoints(gaps, breakpoints),
      breakpoint => cssForGapsFn(spacing[gaps[breakpoint]]),
    )
  }
  return cssForGapsFn(spacing[gaps])
}

const gridGaps = props => applyGridGaps(props.theme, props.gaps, cssForGaps)

const gridRowGaps = props =>
  applyGridGaps(props.theme, props.rowGaps, cssForRowGaps)

const gridColGaps = props =>
  applyGridGaps(props.theme, props.colGaps, cssForColGaps)

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  ${gridGaps};
  ${gridRowGaps};
  ${gridColGaps};
`

export default Grid
