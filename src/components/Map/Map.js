import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { mockData } from '../../mocks/mockVisited' 

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				width: 1200,
				height: 1000,
				latitude: 37.7577,
				longitude: -122.4376,
                zoom: 8,
			}
		}
	}
    
	render() {
		return (
			<ReactMapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
				{...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapStyle="mapbox://styles/mapbox/dark-v9"
            > 
				<Marker longitude={mockData.Canada.Toronto.longitude} latitude={mockData.Canada.Toronto.latitude}>
					<span style={{fontSize: '3em', color: 'red'}}>
						<i class="fas fa-map-marker"></i>
					</span>
				</Marker>
            </ReactMapGL>
		);
	}
  
}
export default Map;