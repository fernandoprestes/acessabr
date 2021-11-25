import React from 'react'
import { useState } from 'react'
import { Pills } from '../../components/Pills'
import imageSpotlight from '../../images/imagem-destaque.png'
import './styles.scss'

const PLACES = [
  'Praça',
  'Parque',
  'Igreja',
  'Hotel',
  'Restaurante',
  'Zoólogico',
  'Farmácia',
  'Loja',
  'Aquário'
]

export const Home = ({city}) => {
  const [selectedPill, setSelectedPill] = useState()
  return (
    <main id="main-content" className="home__container">
      <div className="home__column">
        <h1 className="home__title">{city} para todos</h1>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.{' '}
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <ul className="home__pills">
          {PLACES.map(item => (
            <Pills
              key={item}
              local={item}
              handleClick={() => setSelectedPill(item)}
              selected={selectedPill === item}
            />
          ))}
        </ul>
      </div>
      <div className="home__column">
        <div className="home__image home__image--spotlight">
          <img src={imageSpotlight} alt="imagem destaque menina cadeirante" />
        </div>
      </div>
    </main>
  )
}
