import React from 'react'
import './App.css'
import { Map } from './components/Map/Map'
import { TravelList } from './components/TravelList/TravelList'
import { CitiesContext, useCityContext } from './Context'

const App = () => {
	const cityContext = useCityContext()
	return (
		<CitiesContext.Provider value={cityContext}>
			<div className="App">
				<Map />
				<TravelList />
			</div>
		</CitiesContext.Provider>
	)
}

export default App
