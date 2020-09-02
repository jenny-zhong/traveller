import React, { useState } from 'react'
import { visitedCities } from './mocks/mockVisited'

type City = {
	city: string
	longitude: number
	latitude: number
}
type CityContext = {
	cities: City[]
	addCity: (city: City) => void
	removeCity: (city: City) => void
}

export const CitiesContext = React.createContext<CityContext>({
	cities: [],
	addCity: () => {},
	removeCity: () => {},
})

export const useCityContext = () => {
	const [cities, setCities] = useState(visitedCities)
	const addCity = (city: City) => setCities([...cities, city])
	const removeCity = (city: City) => setCities(cities.filter((x) => x !== city))

	return {
		cities,
		addCity,
		removeCity,
	}
}
