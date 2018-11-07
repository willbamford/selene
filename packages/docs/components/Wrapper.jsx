import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '@selene/components/src'

import theme from '@selene/theme/src'
import { ThemeProvider } from 'styled-components'

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
