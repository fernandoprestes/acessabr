import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Pills } from '../../components/Pills'
import { LocationContext } from '../../contexts/LocationContext'
import imageSpotlight from '../../images/imagem-destaque.png'
import './styles.scss'
import { FilterContext } from '../../contexts/FilterContext'

const PLACES = [
  'Museu',
  'Parque',
  'Igreja',
  'Hotel',
  'Restaurante',
  'Zoólogico',
  'Farmácia',
  'Loja',
  'Aquário',
  "Mercado"
]

export const Home = props => {
  const { city, state } = useParams()
  // const [selectedPill, setSelectedPill] = useState('')
  const { setCity, setState } = useContext(LocationContext)
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext)

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    setCity(city)
    setState(state)
  }, [city, setCity, setState, state])

  const handleFilterPlace = item => {
    if (item === filteredPlace) {
      return setFilteredPlace('')
    }
    setFilteredPlace(item)
  }

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
              handleClick={() => handleFilterPlace(item)}
              selected={filteredPlace === item}
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
