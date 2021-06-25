import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core'
import { Checkbox } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';


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
		<Container maxWidth="xl" style={{ padding: '2em' }}>
			<Grid container spacing={6}>
				<Grid item xs={3} xl={2}>
				</Grid>
				<Grid item xs={9} xl={10} style={{ textAlign: 'left',}}>
					<Typography variant="h4">PROJECTS</Typography>
					<p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
				</Grid>
				<Grid item container xs={3} xl={2} justify="left" direction="column">
					{
						filters.map(category => (
							<Grid item container direction="column" style={{marginBottom: '2em'}}>
								<Typography variant="overline"  align="left">{category.name}</Typography>
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
							</Grid>
						))
					}
				</Grid>
				<Grid item xs={9} xl={10} container>
					<Grid item container direction="row" justify="space-between" alignItems="center" style={{flexShrink: '1'}}>
						<Grid item>
							<ButtonGroup size="small">
								<Button>Beginner</Button>
								<Button>Intermediate</Button>
								<Button>Advanced</Button>
							</ButtonGroup>
						</Grid>
						<Grid item>
							<ButtonGroup size="small">
								<Typography variant="overline">Show</Typography>
								<Button>25</Button>
								<Button>50</Button>
								<Button>100</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
					{
						projects.map(project => (
							<Grid item xs={4} style={{padding: '1.5em'}}>
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