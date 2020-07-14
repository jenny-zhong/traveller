import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { mockData } from '../../mocks/mockVisited'
import { Box } from '@material-ui/core'

type City = {
	city: string
	latitude: number
	longitude: number
}

export const Map = () => {
	const defaultViewport = {
		width: 1200,
		height: 1200,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
	}

	const [viewport, setViewport] = useState(defaultViewport)

	const cityList: City[] = []
	mockData.forEach(({ cities }) =>
		cities.forEach((city) => cityList.push(city))
	)
	return (
		<Box>
			<ReactMapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
				{...viewport}
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle="mapbox://styles/mapbox/dark-v9"
			>
				{cityList.map(({ latitude, longitude }, key) => (
					<Marker
						key={`marker-${key}`}
						latitude={latitude}
						longitude={longitude}
						offsetLeft={-10}
						offsetTop={-20}
					>
						<span style={{ fontSize: '2em', color: 'red' }}>
							<i className="fas fa-map-marker"></i>
						</span>
					</Marker>
				))}
			</ReactMapGL>
		</Box>
	)
}
