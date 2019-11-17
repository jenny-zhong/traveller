import React from 'react'
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				width: 1000,
				height: 1000,
				latitude: 37.7577,
				longitude: -122.4376,
				zoom: 8
			}
		}
	}
    
    
	render() {
		return (
			<ReactMapGL
				mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_TOKEN}
				{...this.state.viewport}
				onViewportChange={(viewport) => this.setState({viewport})}
			/>
		);
	}
  
}
export default Map;