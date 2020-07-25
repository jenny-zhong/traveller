import React, { useContext } from 'react'
import {
	Card,
	CardContent,
	Typography,
	makeStyles,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import { CitySearch } from '../CitySearch/CitySearch'
import { CitiesContext } from '../../Context'

const useStyles = makeStyles({
	card: {
		minWidth: 400,
		marginLeft: 50,
		display: 'flex',
		flexDirection: 'column',
	},
})

export const TravelList = () => {
	const classes = useStyles()
	const { cities, addCity } = useContext(CitiesContext)
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Visited Cities
				</Typography>
				<Divider />
				<List>
					{cities.map(({ city }) => (
						<>
							<ListItem>
								<ListItemIcon>
									<RoomIcon color="secondary" fontSize="large" />
								</ListItemIcon>
								<ListItemText primary={`${city}`} />
							</ListItem>
							<Divider variant="middle" />
						</>
					))}
				</List>
			</CardContent>
			<CardContent>
				<form>
					<CitySearch onSubmit={addCity} />
				</form>
			</CardContent>
		</Card>
	)
}
