import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

export const Pills = ({ local, handleClick, selected }) => {
  return (
    <li
      onClick={handleClick}
      className={`pills__container ${
        selected ? 'pills__container--active' : ''
      }`}
    >
      {local}
    </li>
  )
}

Pills.propType = {
  local: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  selected: PropTypes.bool
}
