import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Divider extends Component {
  render() {
    const { children, backgroundColor, clipPath, header, footer } = this.props
    if (header) {
    }

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          background:
            'linear-gradient(to bottom right, #2BE1F2 0%, #69B6F7 100%)',
          clipPath: clipPath,
          height: 250,
          padding: '10%',
        }}
      >
        {children}
      </div>
    )
  }
}

Divider.propTypes = {}

Divider.defaultProps = {
  backgroundColor: '#fff',
  clipPath: 'polygon(0 0%, 100% 0%, 100% 60%, 0 100%)',
}

export default Divider
