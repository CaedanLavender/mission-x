import {
	Grid,
	CardMedia,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	projectItem: {
		padding: '1.5em'
	}
})

const ProjectItem = (props) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4} className={classes.projectItem} key={props.project.name}>
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