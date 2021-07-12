import {
	Grid,
	Typography,
	Divider,
	FormControlLabel,
	Checkbox
} from '@material-ui/core';
import { PinDropRounded } from '@material-ui/icons';


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
						control={<Checkbox checked={props.filterState.toString().includes(option)} onChange={props.filterHandler} name={option} value={option} color="primary" />}
						label={props.filterTitle==="Year Level"?option[0] + "-" + option[option.length-1]:option}
					/>
				))
			}
		</Grid>
	)
}

export default Filter;