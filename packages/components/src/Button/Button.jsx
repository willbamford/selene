import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: green;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
