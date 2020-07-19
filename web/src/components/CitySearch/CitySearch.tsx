import React, { useState } from 'react'
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete'
import { TextField, makeStyles, Card, Typography, Box } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
	input: {
		width: '100%',
	},
	suggestion: {
		textAlign: 'left',
		paddingLeft: 10,
	},
	active: {
		background: grey[700],
	},
})
export const CitySearch = () => {
	const [location, setLocation] = useState('')
	const classes = useStyles()

	const handleSelect = (address: string) => {
		geocodeByAddress(address)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => console.log('Success', latLng))
			.catch((error) => console.error('Error', error))
	}
	return (
		<PlacesAutocomplete
			value={location}
			onChange={(val) => setLocation(val)}
			onSelect={handleSelect}
			searchOptions={{ types: ['(cities)'] }}
		>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<>
					<TextField
						{...getInputProps({
							className: `location-search-input ${classes.input}`,
						})}
						variant="outlined"
						label="Enter a City"
					/>
					<Card className="autocomplete-dropdown-container">
						{loading && <span>Searching...</span>}
						{suggestions.map((suggestion) => (
							<Box
								{...getSuggestionItemProps(suggestion, {
									className: `${classes.suggestion} ${
										suggestion.active && classes.active
									}`,
								})}
							>
								<Typography gutterBottom>{suggestion.description}</Typography>
							</Box>
						))}
					</Card>
				</>
			)}
		</PlacesAutocomplete>
	)
}
