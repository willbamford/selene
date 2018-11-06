import React from 'react'
import styled from 'styled-components'

import { space, width, fontSize, color, gridGap } from 'styled-system'

// console.log('space', space)
// console.log('width', width)
// console.log('fontSize', fontSize)
// console.log('color', color)

// const s = `
//   ${gridGap};
// `

// console.log('s', s)

const StyledButton = styled.button`
  ${gridGap};
`

const Button = ({ children, ...rest }) => (
  <StyledButton type="button" gridGap={16} {...rest}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
