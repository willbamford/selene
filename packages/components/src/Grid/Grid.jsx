// import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const createMediaQuery = value => `@media screen and (min-width: ${value}px)`

const applyMinMediaQueriesAtBreakpoints = (breakpoints, apply) =>
  Object.keys(breakpoints)
    .map(bp => {
      const value = breakpoints[bp]
      if (value === undefined) {
        // eslint-disable-next-line no-console
        console.warn(`Warning: breakpoint '${bp}' does not exist`)
        return ''
      }
      return bp === '_'
        ? apply(bp)
        : `
            ${createMediaQuery(value)} {
              ${apply(bp)}
            }
          `
    })
    .join('')

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  ${({ gaps, theme: { breakpoints } }) =>
    applyMinMediaQueriesAtBreakpoints(
      breakpoints,
      breakpoint => `
        margin: -${gaps[breakpoint]}px;
        > * {
          padding: ${gaps[breakpoint]}px;
        }`,
    )};
`

// Grid.propTypes = {
//   as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// }

// Grid.defaultProps = {
//   as: 'div',
// }

export default Grid
