// import StudentProfiles from "../StudentProfiles/StudentProfiles";

import {
	createMuiTheme,
	makeStyles,
	ThemeProvider
} from '@material-ui/core/styles';
import "./instructions.css";

const ProjectDashboardContent = ({ tab, project }) => {

	switch (tab) {
		case 'Learning Objectives':
			return (
				<p>{project.learning_objective}</p>
			)
		case 'Instructions':
			return (
				<div className="project__instructions">
				<img src={project.project_thumbnail} alt="project_thumbnail" width={'400px'}/>
				<h1>1. Introduction to creative problem solving</h1>
				<p>
					This programme will help you to learn a few things:
					<ol>
						<li>solve problems by breaking large problems into a few smaller ones, and solve them step-by-step (this is called Computational Thinking)</li>
						<li>solve problems by understanding the root cause, come up with creative ideas and test them (this is called Design Thinking)</li>
						<li>work with others</li>
					</ol>
				</p>
				<p>We will learn these by making animations and games! Let’s take a look at the tool we will use.</p>
				<h1>2. Introduction to Scratch</h1>
				<p>If you are not familiar with Scratch, watch the video below to learn what you can do with it.</p>
				<iframe title="vimeo-player" src="https://player.vimeo.com/video/65583694" width="640" height="400" frameborder="0" allowfullscreen></iframe>
				<p>What can you do with Scratch?<br/>Take 5 minutes to explore sample projects at:<br /> <a href="https://scratch.mit.edu/explore/projects/all">https://scratch.mit.edu/explore/projects/all</a></p>
				<h1>3. Join Scratch</h1>
				<p>If you haven’t used Scratch before, you will need to join Scratch first.<br />Go to <a href="https://scratch.mit.edu">https://scratch.mit.edu</a>. Click on Join Scratch.</p>
				</div>
				// <iframe title="vimeo-player" src="https://player.vimeo.com/video/65583694" width="640" height="400" frameborder="0" allowfullscreen></iframe>
			)
		default:
			return (
				<p>{tab}</p>
			)
	}
}

export default ProjectDashboardContent;