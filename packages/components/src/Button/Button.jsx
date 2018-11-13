import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledButton = styled.button`
  ${color};
`

const Button = ({ children, ...rest }) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
