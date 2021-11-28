import { useState } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Curator } from '../components/Curator'
import { Header } from '../components/Header'
import { Places } from '../components/Places/Index'
import { FilterContext } from '../contexts/FilterContext'
import { LocationContext } from '../contexts/LocationContext'
import { Home } from '../pages/Home'

export const Routes = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [filteredPlace, setFilteredPlace] = useState('')

  return (
    <FilterContext.Provider value={{ filteredPlace, setFilteredPlace }}>
      <LocationContext.Provider value={{ city, state, setCity, setState }}>
        <Header />
        <Switch>
          <Route
            // path="/:state/:city" //routes
            path="/"
            element={
              <>
                <Home city={'São Paulo'} state={'SP'} />
                <Places />
                <Curator />
              </>
            }
          />
        </Switch>
      </LocationContext.Provider>
    </FilterContext.Provider>
  )
}
