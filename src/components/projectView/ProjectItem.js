import {
	Grid,
	CardMedia,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	projectItem: {
		padding: '1.5em'
	},
	upperText: {
		textTransform: "uppercase"
	},
	tweakedLink: {
		textDecoration: "none"
	}
})

const ProjectItem = (props) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4} className={classes.projectItem} key={props.project.project_number}>
			<Link to={`/ProjectView/projects/${props.project.project_id}`} className={classes.tweakedLink}>
			<CardMedia
				component="img"
				alt={props.project.project_name}
				image={props.project.project_thumbnail}
			/>
			<Typography variant="h5">{props.project.project_name}</Typography>
			<Typography variant="subtitle2" className={classes.upperText}>{props.project.course} | {props.project.activity_type}</Typography>
			</Link>
		</Grid>
	)
}

export default ProjectItem;