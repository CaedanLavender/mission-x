import { useState } from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core'
import FormLabel from '@material-ui/core/FormLabel';
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab'

export default function ProjectView() {
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [subscriptionFilter, setSubscriptionFilter] = useState([]);
	const [activityTypeFilter, setActivityTypeFilter] = useState([]);
	const [yearLevelFilter, setYearLevelFilter] = useState([]);
	const [subjectMatterFilter, setSubjectMatterFilter] = useState([]);
	const [showFilter, setShowFilter] = useState('25');
	const [levelFilter, setLevelFilter] = useState('');

	const handleShowFilter = (event, newShowFilter) => {
		console.log(newShowFilter)
		setShowFilter(newShowFilter || showFilter);
	}

	const handleLevelFilter = (event, newLevelFilter) => {
		setLevelFilter(newLevelFilter);
	}

	const handleSubscriptionFilter = (event) => {
		let newFilter = event.target.value;
		if (subscriptionFilter.includes(newFilter)) {
			setSubscriptionFilter(subscriptionFilter.filter(filter => filter !== newFilter))
		} else {
			setSubscriptionFilter([...subscriptionFilter,newFilter])
		}
	}

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
			name: "My Birthday",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-02.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "10 Block Challenge",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-03.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Build a band",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-04.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "The bear and the monkey",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-05.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Debugging",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-06.png").default,
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

				{/* BLANK SPACE */}
				<Grid item xs={3} xl={2}>
				</Grid>

				{/* HEADING CONTAINER */}
				<Grid item xs={9} xl={10} style={{ textAlign: 'left', }}>
					<Typography variant="h4">PROJECTS</Typography>
					<p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
				</Grid>

				{/* FILTER CONTAINER */}
				<Grid item container xs={3} xl={2} justify="left" direction="column">
					<Grid item container direction="column" style={{ marginBottom: '2em' }}>
						<Typography variant="overline" align="left">Subscription ({subscriptionFilter})</Typography>
						<Divider />
						<FormControlLabel
							control={<Checkbox checked={subscriptionFilter.includes("free")} onChange={handleSubscriptionFilter} name="free" value="free" color="primary"/>}
							label={"Free"}
						/>
						<FormControlLabel
							control={<Checkbox checked={subscriptionFilter.includes("premium")} onChange={handleSubscriptionFilter} name="premium" value="premium" color="primary"/>}
							label={"Premium"}
						/>
					</Grid>
					{
						filters.map(category => (
							<Grid item container direction="column" style={{ marginBottom: '2em' }}>
								<Typography variant="overline" align="left">{category.name}</Typography>
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

				{/* PROJECT GRID CONTAINER */}
				<Grid item xs={9} xl={10}>

					{/* //BUTTON GROUPS */}
					<Grid item container direction="row" justify="space-between">
						<Grid item>
							{/* Toggle Group for level filter */}
							<ToggleButtonGroup
								size="small"
								value={levelFilter}
								exclusive
								onChange={handleLevelFilter}
							>
								<ToggleButton value="Beginner">
									Beginner
								</ToggleButton>
								<ToggleButton value="Intermediate">
									Intermediate
								</ToggleButton>
								<ToggleButton value="Advanced">
									Advanced
								</ToggleButton>
							</ToggleButtonGroup>
						</Grid>
						<Grid item>
							{/* Toggle Group for amount of projects to show */}
							<Typography variant="overline" style={{marginRight: '1em'}}>Show</Typography>
							<ToggleButtonGroup
								size="small"
								value={showFilter}
								exclusive
								onChange={handleShowFilter}
							>
								<ToggleButton value="25">
									25
								</ToggleButton>
								<ToggleButton value="50">
									50
								</ToggleButton>
								<ToggleButton value="100">
									100
								</ToggleButton>
							</ToggleButtonGroup>
						</Grid>
					</Grid>

					{/* PROJECT ITEM */}
					<Grid item container>
						{/* LOOP THROUGH PROJECTS FROM OBJECT AND CREATE GRID ITEMS */}
						{
							projects.map(project => (
								<Grid item xs={12} sm={6} md={4} style={{ padding: '1.5em' }}>
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

			</Grid>

		</Container>
	)
}