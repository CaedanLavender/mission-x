import { Grid } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core'


const ProjectItem = (props) => {
	// if (props.subscriptionFilter.length && !props.subscriptionFilter.includes(props.project.subscription)) return null
	// if (props.activityTypeFilter.length && !props.activityTypeFilter.includes(props.project.activityType)) return null
	// if (props.yearLevelFilter.length && !props.yearLevelFilter.includes(props.project.yearLevel)) return null
	// if (props.subjectMatterFilter.length && !props.subjectMatterFilter.includes(props.project.subjectMatter)) return null
	// if (props.levelFilter && props.levelFilter !== props.project.level) return null;
	return (
		<Grid item xs={12} sm={6} md={4} style={{ padding: '1.5em' }} key={props.project.name}>
			<CardMedia
				component="img"
				alt={props.project.name}
				image={props.project.image}
			/>
			<Typography variant="h5">{props.project.name}</Typography>
			<Typography variant="subtitle2">{props.project.level.toUpperCase()} | {props.project.activityType}</Typography>
		</Grid>
	)
}

export default ProjectItem;