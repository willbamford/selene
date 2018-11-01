// import React from 'react'
// import styled from 'styled-components'

// const StyledButton = styled.button`
//   background-color: green;
// `

// const Button = ({ children }) => <StyledButton>{children}</StyledButton>

// export default Button

import React from 'react'

const Button = ({ children }) => <button>{children}</button>

Button.propTypes = {
  // children: Prop
}

Button.displayName = 'Button'

export default Button
