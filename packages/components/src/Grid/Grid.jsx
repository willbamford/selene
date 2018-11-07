import styled from 'styled-components'

const createMediaQuery = value => `@media screen and (min-width: ${value}px)`

// Move to primitives / system folder?
const applyMinMediaQueriesAtBreakpoints = (breakpoints, apply) =>
  Object.keys(breakpoints)
    .map(bp => {
      const value = breakpoints[bp]
      if (value === undefined) {
        // eslint-disable-next-line no-console
        console.warn(`Warning: breakpoint '${bp}' does not exist`)
        return ''
      }
      return bp === '_' /* todo: constant */
        ? apply(bp)
        : `
            ${createMediaQuery(value)} {
              ${apply(bp)}
            }
          `
    })
    .join('')

const getGapBreakpoints = (gaps, breakpoints) =>
  Object.keys(gaps).reduce(
    (prev, curr) => ({ ...prev, ...{ [curr]: breakpoints[curr] } }),
    {},
  )

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  ${({ gaps, theme: { breakpoints } }) =>
    applyMinMediaQueriesAtBreakpoints(
      getGapBreakpoints(gaps, breakpoints),
      breakpoint => `
        margin: -${gaps[breakpoint]}px;
        > * {
          padding: ${gaps[breakpoint]}px;
        }`,
    )};
`

export default Grid
