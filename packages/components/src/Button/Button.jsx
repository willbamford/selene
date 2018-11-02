import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: tomato;
  color: white;
  padding: 1rem;
`

const Button = ({ children }) => (
  <StyledButton type="button">{children}</StyledButton>
)

Button.displayName = 'Button'

export default Button
