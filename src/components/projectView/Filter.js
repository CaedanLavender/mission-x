import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Divider } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core'
import { Checkbox } from '@material-ui/core';


const Filter = (props) => {
	return (
	<Grid item container direction="column" style={{ marginBottom: '2em' }} key={props.filterTitle}>
	{/* --ACTIVITY TYPE FILTER */}
	<Typography variant="overline" align="left">{props.filterTitle}({props.filterState})</Typography>
	<Divider />
	{
		props.filterArray.map(option =>(
			<FormControlLabel
			key={option}
			control={<Checkbox checked={props.filterState.includes(option)} onChange={props.filterHandler} name={option} value={option} color="primary"/>}
			label={option}
			/>
		))
	}
	</Grid>
	)
}

export default Filter;