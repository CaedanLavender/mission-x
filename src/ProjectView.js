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
import { ToggleButton } from '@material-ui/lab';

import Filter from './components/projectView/Filter';

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

	const filters = {
		subscription: ['Free','Premium'],
		activityType: ['Animation','Game','Chatbot','Augmented Reality'],
		yearLevel: ['1-4','5-6','7-8','9-13'],
		subjectMatter: ['Computer Science','Maths','Science','Language','Art','Music']
	}

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
					<Filter
						filters={filters}
						filterState={subscriptionFilter}
						filterArray={filters.subscription}
						filterHandler={handleSubscriptionFilter}
					/>
					
					<Filter
						filters={filters}
						filterState={activityTypeFilter}
						filterArray={filters.activityType}
						filterHandler={handleActivityTypeFilter}
					/>

					<Filter
						filters={filters}
						filterState={yearLevelFilter}
						filterArray={filters.yearLevel}
						filterHandler={handleYearLevelFilter}
						/>

					<Filter
						filters={filters}
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