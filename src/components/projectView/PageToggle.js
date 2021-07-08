import { Grid } from '@material-ui/core';
import {
	ToggleButtonGroup,
	ToggleButton
} from '@material-ui/lab';


const PageToggle = (props) => {
	return (
		<Grid item container direction="row" justify="center" spacing={2}>
			<Grid item>
				<ToggleButton onClick={() => props.handlePageIncrement(-1)} disabled={props.page - 1 < 1}>Prev</ToggleButton>
			</Grid>
			<Grid item>
				<ToggleButtonGroup value={props.page} exclusive>
					{
						[...Array(props.pageCount)].map((e, i) => (
							<ToggleButton value={i + 1} onClick={() => props.handlePageChange(i + 1)}>{i + 1}</ToggleButton>
						))
					}
				</ToggleButtonGroup>
			</Grid>
			<Grid item>
				<ToggleButton onClick={() => props.handlePageIncrement(1)} disabled={props.page + 1 > props.pageCount}>Next</ToggleButton>
			</Grid>
		</Grid>
	)
}

export default PageToggle;