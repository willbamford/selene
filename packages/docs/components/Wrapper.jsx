import React from 'react'
import { GlobalStyle } from '../../components/src'

const Wrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

export default Wrapper
