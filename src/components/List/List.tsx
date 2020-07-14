import React from 'react'
import { mockData } from '../../mocks/mockVisited'
import {
	TextField,
	Card,
	CardContent,
	Typography,
	makeStyles,
	Divider,
} from '@material-ui/core'

const useStyles = makeStyles({
	card: {
		minWidth: 400,
		marginLeft: 50,
	},
})

export const List = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Visited Cities
				</Typography>
				<Divider />
				<form>
					<TextField label="Enter a City" variant="outlined"></TextField>
				</form>
			</CardContent>
		</Card>
	)
}
