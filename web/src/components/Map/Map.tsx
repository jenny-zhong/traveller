import React, { useState, useContext } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Box } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import { CitiesContext } from '../../Context'

export const Map = () => {
	const defaultViewport = {
		width: 1200,
		height: 1200,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
	}

	const [viewport, setViewport] = useState(defaultViewport)
	const { cities } = useContext(CitiesContext)
	return (
		<Box>
			<ReactMapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
				{...viewport}
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle="mapbox://styles/mapbox/dark-v9"
			>
				{cities.map(({ latitude, longitude }, key) => (
					<Marker
						key={`marker-${key}`}
						latitude={latitude}
						longitude={longitude}
						offsetLeft={-10}
						offsetTop={-20}
					>
						<RoomIcon color="secondary" fontSize="large" />
					</Marker>
				))}
			</ReactMapGL>
		</Box>
	)
}
