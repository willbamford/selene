import React from 'react'
import styled from 'styled-components'
import { flexDirection } from 'styled-system'

const StyledButton = styled.button`
  ${flexDirection};
`

const Button = ({ children, ...rest }) => (
  <StyledButton type="button" flexDirection={['column', null, 'row']} {...rest}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
