import {
	Grid,
	Typography,
	Divider,
	FormControlLabel,
	Checkbox
} from '@material-ui/core';


const Filter = (props) => {
	return (
		<Grid item container direction="column" style={{ marginBottom: '2em' }} key={props.filterTitle}>
			{/* --ACTIVITY TYPE FILTER */}
			<Typography variant="overline" align="left">{props.filterTitle}</Typography>
			<Divider />
			{
				props.filterArray.map(option => (
					<FormControlLabel
						key={option}
						control={<Checkbox checked={props.filterState.includes(option)} onChange={props.filterHandler} name={option} value={option} color="primary" />}
						label={option}
					/>
				))
			}
		</Grid>
	)
}

export default Filter;