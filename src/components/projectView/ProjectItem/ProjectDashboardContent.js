// import {
// 	createMuiTheme,
// 	makeStyles,
// 	ThemeProvider
// } from '@material-ui/core/styles';
import "./instructions.css";
import SubmitProject from './SubmitProject';

const ProjectDashboardContent = ({ tab, user, project, global, sendHelpRequest }) => {

	// Switch statment that returns a different component/html depending on the state of 'tab'
	switch (tab) {
		case 'Learning Objectives':
			return (
				// This is probabably not ideal, but this is a 'brute force' method for getting html to render
				// SELF REFLECTION: the better solution here would be to build in a markdown renderer and have the database store the markdown, this would remove the risk of people intercepting and injecting malicious html code. You can't do much harm with markdown :)
				<div className="project__instructions">
					<div dangerouslySetInnerHTML={{ __html: project.learning_objective }} />
				</div>
			)
		case 'Instructions':
			return (
				// See comments in previous swtich statement
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
			return <SubmitProject user={user} project={project} global={global} sendHelpRequest={sendHelpRequest}/>
		default:
			return (
				<p>{tab}</p>
			)
	}
}

export default ProjectDashboardContent;