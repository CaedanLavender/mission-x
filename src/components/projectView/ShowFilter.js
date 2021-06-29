import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';


const ShowFilter = (props) => {
	return (
		<Grid item>
			<Typography variant="overline" style={{ marginRight: '1em' }}>Show</Typography>
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
