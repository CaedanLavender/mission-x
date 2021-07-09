import {
	Typography,
	Grid
} from '@material-ui/core'

import {
	ToggleButtonGroup,
	ToggleButton
} from '@material-ui/lab';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	showText: {
		padding: '1em'
	}
})

const ShowFilter = (props) => {
	const classes = useStyles();
	return (
		<Grid item>
			<Typography variant="overline" className={classes.showText}>Show</Typography>
			<ToggleButtonGroup
				size="small"
				value={props.showFilter}
				exclusive
				onChange={props.handleShowFilter}
			>
				<ToggleButton value={6}>6</ToggleButton>
				<ToggleButton value={12}>12</ToggleButton>
				<ToggleButton value={100}>100</ToggleButton>
			</ToggleButtonGroup>
		</Grid>
	)
}

export default ShowFilter;
