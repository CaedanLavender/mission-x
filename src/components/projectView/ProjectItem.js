import { Grid } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core'


const ProjectItem = (props) => {
	return (
		<Grid item xs={12} sm={6} md={4} style={{ padding: '1.5em' }}>
			<CardMedia
				component="img"
				alt={props.project.name}
				image={props.project.image}
			/>
			<Typography variant="h5">{props.project.name}</Typography>
			<Typography variant="overline">{props.project.level} | {props.project.activityType}</Typography>
		</Grid>
	)
}

export default ProjectItem;