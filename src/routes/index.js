import { useState } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Header } from '../components/Header'
import { LocationContext } from '../contexts/LocationContext'
import { Home } from '../pages/Home'

export const Routes = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  return (
    <LocationContext.Provider value={{ city, state, setCity, setState }}>
      <Header />
      <Switch>
        <Route
          path="/:state/:city"
          element={<Home city={city} state={state} />}
        />
      </Switch>
    </LocationContext.Provider>
  )
}
