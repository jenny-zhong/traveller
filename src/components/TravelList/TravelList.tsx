import React from 'react'
import { visitedCities } from '../../mocks/mockVisited'
import {
	TextField,
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

const useStyles = makeStyles({
	card: {
		minWidth: 400,
		marginLeft: 50,
	},
	input: {
		width: '100%',
	},
})

export const TravelList = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Visited Cities
				</Typography>
				<Divider />
				<List>
					{visitedCities.map(({ city }) => (
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
				<form>
					<TextField
						className={classes.input}
						label="Enter a City"
						variant="outlined"
						color="primary"
					></TextField>
				</form>
			</CardContent>
		</Card>
	)
}
