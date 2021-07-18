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
					<img src="/images/projects/project-01/cover.webp" alt="project_thumbnail" width={'400px'} />
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
					<p>What can you do with Scratch?<br />Take 5 minutes to explore sample projects at:<br /> <a href="https://scratch.mit.edu/explore/projects/all">https://scratch.mit.edu/explore/projects/all</a></p>
					<h1>3. Join Scratch</h1>
					<p>If you haven’t used Scratch before, you will need to join Scratch first.<br />Go to <a href="https://scratch.mit.edu">https://scratch.mit.edu</a>. Click on Join Scratch.</p>
					<img src="/images/projects/project-01/join-scratch.webp" alt="join scratch" />
					<p>On the left hand side, you have the Blocks that you can drag and drop onto the canvas (or coding area). The blocks are instructions that we give to a “Sprite” (a character), such as “move 10 steps” and “turn 15 degrees”. They are grouped into categories such as “Motion”, “Looks” and “Sound”.</p>
					<p>Find “move 10 steps” and drag onto the canvas. Click on the move block on the canvas and see your Cat move.</p>
					<img src="/images/projects/project-01/scratch-gif-01.gif" alt="scratch, dragging component onto workspace" />
					<p>Then add the “when Green Flag clicked” and “start sound Meow” block on top of the Move block. It should look like below.</p>
					<img src="/images/projects/project-01/scratch-screenshot-01.webp" alt="sratch, start sound meow" />
					<p>Click the Green Flag to test (circled in red line below)</p>
					<img src="/images/projects/project-01/scratch-screenshot-02.webp" alt="sratch, click the green flag" />
					<p>Well done! You made your first Scratch!</p>
					<h1>5. Explore Scratch</h1>
					<p>Find “Say” and “Change size”  blocks and add them to the canvas. Click Green Flag to see how it changes the Cat.</p>
					<img src="/images/projects/project-01/scratch-screenshot-03.webp" alt="sratch, add 'say' and 'change size' blocks" />
					<p>After you finish, explore and try adding other blocks.</p>
					<h1>6. Save and Share</h1>
					<p>If you want to manually save your work, and you see the “Save Now” button, click on it. If you do not see the “Save Now” button, Scratch already saved your work by itself, you don’t have to do anything.</p>
					<img src="/images/projects/project-01/scratch--save-now.webp" alt="scratch, save now"/>
					<p>You can also change the title of the project from “Untitled” to “First Scratch” or give it a descriptive name you like.</p>
					<img src="/images/projects/project-01/scratch--rename.webp" alt="scratch, rename"/>
					<p>If you do not see the orange Share button, validate your email address by finding an email sent by Scratch, and click on the link in the email (you may need help from an adult). The Share button will only be enabled once you clicked on the link in that email to validate your email address.</p>
					<p>If you have the Share button in orange, click on it to Share your project. This will make your project publicly viewable. Other people can see your work but they cannot change what you do.</p>
					<img src="/images/projects/project-01/scratch--share" alt="scratch, share"/>
					<h1>7. Bonus Challenge</h1>
					<img src="/images/projects/project-01/cover.webp" alt="scratch"/>
					<p>If you want an additional challenge, try to make a Scratch program that does the following:</p>
					<ul>
						<li>When the green flag is clicked, the Cat starts from the left hand edge of the screen </li>
						<li>It walks to the centre</li>
						<li>Then it says “hi, how are you?” for 2 seconds</li>
						<li>Then it keeps walking to the right hand edge of the screen</li>
						<li>Then the cat goes back to the left hand edge and repeats 3 times the above steps (walk to the centre, say “hi, how are you”, etc).</li>
					</ul>
					<h1 className="heading-centered">Congratulations!<br/>You Completed {project.project_number}!</h1>
				</div>
				// <iframe title="vimeo-player" src="https://player.vimeo.com/video/65583694" width="640" height="400" frameborder="0" allowfullscreen></iframe>
			)
			case 'Video Tutorial':
				return (
					<iframe title="vimeo-player" src={project.video} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
				)
		default:
			return (
				<p>{tab}</p>
			)
	}
}

export default ProjectDashboardContent;