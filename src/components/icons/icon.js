
import React from 'react'
import PropTypes from 'prop-types'

//const iconContext = require.context('../../images/homeIcons', false, /\.svg$/);

const Icon = ({ name, fould, ...props }) => {
  //const IconComponent = iconContext(`./${name}.svg`).default;
  const IconComponent = require(`../../images/${fould}/icons/${name}.svg`).default

  return <IconComponent {...props} />
}
Icon.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Icon