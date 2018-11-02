import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '@selene/components/src'

// import * as theme from '@selene/theme'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: 'terrible',
}

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
