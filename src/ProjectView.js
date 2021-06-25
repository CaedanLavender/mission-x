import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Card } from "@material-ui/core"
import { CardMedia } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core"
import { Checkbox } from "@material-ui/core"
import FormLabel from '@material-ui/core/FormLabel'


export default function ProjectView() {

	const projects = [
		{
			name: "Introduction",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		}
	];

	const filters = [
		{
			name: "Subscription",
			options: [
				"Free",
				"Premium"
			]
		},
		{
			name: "Activity Type",
			options: [
				"Animation",
				"Game",
				"Chatbot",
				"Augmented Reality",
			]
		},
		{
			name: "Year Level",
			options: [
				"1-4",
				"5-6",
				"7-8",
				"9-13"
			]
		},
		{
			name: "Subject Matter",
			options: [
				"Computer Science",
				"Maths",
				"Science",
				"Language",
				"Art",
				"Music"
			]
		}
	]

	return (
		<Container maxWidth="xl" style={{ backgroundColor: 'yellow', padding: '1em' }}>
			<Grid container spacing={2} style={{ backgroundColor: 'orange' }}>
				<Grid item xs={3} lg={2} style={{ backgroundColor: 'red' }}>
					<h1>NULL</h1>
				</Grid>
				<Grid item xs={9} lg={10} style={{ textAlign: 'left', backgroundColor: 'blue' }}>
					<Typography variant="h4">PROJECTS</Typography>
					<p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
				</Grid>
				<Grid item container xs={3} lg={2} justify="left" direction="column">
					<h3>Menu goes here</h3>
					<FormLabel component="legend">Subscription</FormLabel>
					<Typography variant="overline">Subscription</Typography>
					<Divider />
					<FormControlLabel
						control={<Checkbox checked={true} name="test" color="primary" />}
						label="Free"
					/>
					{
						filters.map(category => (
							<>
								<FormLabel component="legend">{category.name}</FormLabel>
								<Divider />
								{
									category.options.map(option => (
										<FormControlLabel
											control={
												<Checkbox
													checked={true}
													name="test"
													color="primary"
												/>
											}
											label={option}
										/>
									))
								}
							</>
						))
					}
				</Grid>
				<Grid item xs={9} lg={10} container spacing={5}>
					<Grid item xs={12}>menu stuff</Grid>
					{
						projects.map(project => (
							<Grid item xs={4}>
								<CardMedia
									component="img"
									alt={project.name}
									image={project.image}
								/>
								<Typography variant="h5">{project.name}</Typography>
								<Typography variant="overline">{project.level} | {project.activityType}</Typography>
							</Grid>
						))
					}
				</Grid>
			</Grid>
		</Container>
	)
}