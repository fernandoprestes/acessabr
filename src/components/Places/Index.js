import React, { useContext } from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import { Slider } from '../Slider'
import './style.scss'

export const Places = () => {
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext)

  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          {filteredPlace === '' ? 'Locais' : filteredPlace} <span>Acessíveis</span>
        </h2>
        <div className="places__select">
          <h3>Ordernar por: </h3>
          <select>
            <option>distancia</option>
            <option>alfabeto</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider />
      </div>
    </section>
  )
}
