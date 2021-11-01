import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '@motor-js/theme'
import { deepMerge } from '../utils/object'

ThemeContext.Extend = ({ children, value }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ThemeContext.Provider value={deepMerge(theme, value)}>
        {children}
      </ThemeContext.Provider>
    )}
  </ThemeContext.Consumer>
)

ThemeContext.Extend.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({}).isRequired,
}

export { ThemeContext }