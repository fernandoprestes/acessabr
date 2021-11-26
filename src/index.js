import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Curator } from './components/Curator'
import { Footer } from './components/Footer'
import { Places } from './components/Places/Index'
import { Routes } from './routes'
import './styles/global.scss'

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
        <Places />
        <Curator />
      </BrowserRouter>
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
)
