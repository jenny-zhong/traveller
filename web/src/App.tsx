import React from 'react'
import './App.css'
import { Map } from './components/Map/Map'
import { TravelList } from './components/TravelList/TravelList'

const App = () => {
	return (
		<div className="App">
			<Map />
			<TravelList />
		</div>
	)
}

export default App
