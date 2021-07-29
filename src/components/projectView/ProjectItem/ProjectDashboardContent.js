// import StudentProfiles from "../StudentProfiles/StudentProfiles";

import {
	createMuiTheme,
	makeStyles,
	ThemeProvider
} from '@material-ui/core/styles';
import "./instructions.css";
import SubmitProject from './SubmitProject';

const ProjectDashboardContent = ({ tab, user, project, global }) => {

	switch (tab) {
		case 'Learning Objectives':
			return (
				<div className="project__instructions">
					<div dangerouslySetInnerHTML={{ __html: project.learning_objective }} />
				</div>
			)
		case 'Instructions':
			return (
				<div className="project__instructions">
					<div dangerouslySetInnerHTML={{ __html: project.instructions }} />
					<h1 className="heading-centered">Congratulations!<br />You Completed {project.project_number}!</h1>
				</div>
			)
		case 'Video Tutorial':
			return (
				<iframe title="vimeo-player" src={project.video} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
			)
		case 'Make Project':
		case 'Preview Project':
			return (
				<img src={project.project_preview} width="80%" alt={tab} />
			)
		case 'Submit Project':
			return <SubmitProject user={user} project={project} global={global}/>
		default:
			return (
				<p>{tab}</p>
			)
	}
}

export default ProjectDashboardContent;