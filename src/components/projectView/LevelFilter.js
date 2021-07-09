import { Grid } from '@material-ui/core';
import {
	ToggleButtonGroup,
	ToggleButton
} from '@material-ui/lab';

const LevelFilter = (props) => {
	return (
		<Grid item>
			<ToggleButtonGroup
				size="small"
				value={props.levelFilter}
				exclusive
				onChange={props.handleLevelFilter}
				color="secondary"
			>
				<ToggleButton value="Beginner">Beginner</ToggleButton>
				<ToggleButton value="Intermediate">Intermediate</ToggleButton>
				<ToggleButton value="Advanced">Advanced</ToggleButton>
			</ToggleButtonGroup>
		</Grid>
	)
}

export default LevelFilter;