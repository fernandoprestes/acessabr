import React from 'react'
import logoAcessaBR from './../../images/logo-acessabr.svg'
import logoEbac from './../../images/logo-ebac.svg'
import './style.scss'

export const Header = ({city, state}) => {
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoAcessaBR} alt="logo acessa br" />
        <span className="header__city"> / {city} - {state}</span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__span">apio: </span>
        <img src={logoEbac} alt="logo ebac" />
      </div>
    </header>
  )
}
