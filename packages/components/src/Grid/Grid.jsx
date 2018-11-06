// import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = styled.div.attrs({
  style: ({ margin }) =
})`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: ${props => `-${props.spacing}`};
  > * {
    width: 50%;
    padding: ${props => props.spacing};
  }
`

// Grid.propTypes = {
//   as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// }

// Grid.defaultProps = {
//   as: 'div',
// }

export default Grid
