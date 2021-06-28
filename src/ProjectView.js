// LIBRARY IMPORTS
import { useState } from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
// BELLOW CAN POSSIBLY BE DELETED
// import { Paper } from '@material-ui/core';
// import { Card } from '@material-ui/core'
// import { CardMedia } from '@material-ui/core';
// import { Divider } from '@material-ui/core';
// import { FormControlLabel } from '@material-ui/core'
// import FormLabel from '@material-ui/core/FormLabel';
// import { Checkbox } from '@material-ui/core';
// import { ButtonGroup } from '@material-ui/core';

// COMPONENT IMPORTS
import Filter from './components/projectView/Filter';
import ProjectItem from './components/projectView/ProjectItem';

export default function ProjectView() {
	const [subscriptionFilter, setSubscriptionFilter] = useState([]);
	const [activityTypeFilter, setActivityTypeFilter] = useState([]);
	const [yearLevelFilter, setYearLevelFilter] = useState([]);
	const [subjectMatterFilter, setSubjectMatterFilter] = useState([]);
	const [levelFilter, setLevelFilter] = useState('');
	const [showFilter, setShowFilter] = useState('25');

	// TOGGLE GROUP HANDLERS
	const handleShowFilter = (event, newShowFilter) => {
		console.log(newShowFilter)
		setShowFilter(newShowFilter || showFilter);
	}

	const handleLevelFilter = (event, newLevelFilter) => {
		setLevelFilter(newLevelFilter);
		console.log(newLevelFilter)
	}

	// FILTER HANDLERS
	const handleSubscriptionFilter = (event) => {
		let newFilter = event.target.value;
		if (subscriptionFilter.includes(newFilter)) {
			setSubscriptionFilter(subscriptionFilter.filter(filter => filter !== newFilter))
		} else {
			setSubscriptionFilter([...subscriptionFilter,newFilter])
		}
	}

	const handleActivityTypeFilter = (event) => {
		let newFilter = event.target.value;
		if (activityTypeFilter.includes(newFilter)) {
			setActivityTypeFilter(activityTypeFilter.filter(filter => filter !== newFilter))
		} else {
			setActivityTypeFilter([...activityTypeFilter,newFilter])
		}
	}

	const handleYearLevelFilter = (event) => {
		let newFilter = event.target.value;
		if (yearLevelFilter.includes(newFilter)) {
			setYearLevelFilter(yearLevelFilter.filter(filter => filter !== newFilter))
		} else {
			setYearLevelFilter([...yearLevelFilter,newFilter])
		}
	}

	const handleSubjectMatterFilter = (event) => {
		let newFilter = event.target.value;
		if (subjectMatterFilter.includes(newFilter)) {
			setSubjectMatterFilter(subjectMatterFilter.filter(filter => filter !== newFilter))
		} else {
			setSubjectMatterFilter([...subjectMatterFilter,newFilter])
		}
	}

	// OBJECTS
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
			yearLevel: "5-6",
			level: "Intermediate",
			subjectMatter: "Computer Science",
		},
		{
			name: "10 Block Challenge",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-03.png").default,
			activityType: "Game",
			yearLevel: "5-6",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Build a band",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-04.png").default,
			activityType: "Game",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "The bear and the monkey",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-05.png").default,
			activityType: "Augmented Reality",
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

	const filters = {
		subscription: ['Free','Premium'],
		activityType: ['Animation','Game','Chatbot','Augmented Reality'],
		yearLevel: ['1-4','5-6','7-8','9-13'],
		subjectMatter: ['Computer Science','Maths','Science','Language','Art','Music']
	}


	const theme = createMuiTheme({
		typography: {
			fontFamily: "Open Sans",
			h1: {
				fontFamily: 'Nunito',
				fontWeight: 900
			},
			h2: {
				fontFamily: 'Nunito'
			},
			h3: {
				fontFamily: 'Nunito'
			},
			h4: {
				fontFamily: 'Nunito',
				fontWeight: 900
			},
			h5: {
				fontFamily: 'Nunito'
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
		<Container maxWidth="xl" style={{ padding: '2em' }}>
			<Grid container spacing={6}>

				{/* BLANK SPACE */}
				<Grid item xs={3} xl={2}>
				</Grid>

				{/* HEADING CONTAINER */}
				<Grid item xs={9} xl={10} style={{ textAlign: 'left', }}>
					<Typography variant="h4">PROJECTS</Typography>
					<Typography variant="body1">Welcome to the project library. You can use the filters on the right to help you search for specific projects.</Typography>
				</Grid>

				{/* FILTER CONTAINER */}
				<Grid item container xs={3} xl={2} direction="column">
					<Filter
						filters={filters}
						filterTitle="Subscription"
						filterState={subscriptionFilter}
						filterArray={filters.subscription}
						filterHandler={handleSubscriptionFilter}
						/>		
					<Filter
						filters={filters}
						filterTitle="Activity Type"
						filterState={activityTypeFilter}
						filterArray={filters.activityType}
						filterHandler={handleActivityTypeFilter}
						/>

					<Filter
						filters={filters}
						filterTitle="Year Level"
						filterState={yearLevelFilter}
						filterArray={filters.yearLevel}
						filterHandler={handleYearLevelFilter}
						/>

					<Filter
						filters={filters}
						filterTitle="Subject Matter"
						filterState={subjectMatterFilter}
						filterArray={filters.subjectMatter}
						filterHandler={handleSubjectMatterFilter}
					/>

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
								<ToggleButton value="Beginner">Beginner</ToggleButton>
								<ToggleButton value="Intermediate">Intermediate</ToggleButton>
								<ToggleButton value="Advanced">Advanced</ToggleButton>
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
								<ToggleButton value="25">25</ToggleButton>
								<ToggleButton value="50">50</ToggleButton>
								<ToggleButton value="100">100</ToggleButton>
							</ToggleButtonGroup>
						</Grid>
					</Grid>

					{/* PROJECT ITEM */}
					<Grid item container>
						{/* LOOP THROUGH PROJECTS FROM OBJECT AND CREATE GRID ITEMS */}
						{
							projects.map(project => (
								<ProjectItem
									project={project}
									subscriptionFilter={subscriptionFilter}
									activityTypeFilter={activityTypeFilter}
									yearLevelFilter={yearLevelFilter}
									subjectMatterFilter={subjectMatterFilter}
									levelFilter={levelFilter}
									/>
							))
						}
					</Grid>

				</Grid>

			</Grid>

		</Container>
		</ThemeProvider>
	)
}