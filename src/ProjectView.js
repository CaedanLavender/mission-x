// LIBRARY IMPORTS
import { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [subscriptionFilter, setSubscriptionFilter] = useState([]);
	const [activityTypeFilter, setActivityTypeFilter] = useState([]);
	const [yearLevelFilter, setYearLevelFilter] = useState([]);
	const [subjectMatterFilter, setSubjectMatterFilter] = useState([]);
	const [levelFilter, setLevelFilter] = useState('');
	const [showFilter, setShowFilter] = useState(6);
	const [page, setPage] = useState(1);
	const [pageCount, setPageCount] = useState(2);

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
			setSubscriptionFilter([...subscriptionFilter, newFilter])
		}
	}

	const handleActivityTypeFilter = (event) => {
		let newFilter = event.target.value;
		if (activityTypeFilter.includes(newFilter)) {
			setActivityTypeFilter(activityTypeFilter.filter(filter => filter !== newFilter))
		} else {
			setActivityTypeFilter([...activityTypeFilter, newFilter])
		}
	}

	const handleYearLevelFilter = (event) => {
		let newFilter = event.target.value;
		if (yearLevelFilter.includes(newFilter)) {
			setYearLevelFilter(yearLevelFilter.filter(filter => filter !== newFilter))
		} else {
			setYearLevelFilter([...yearLevelFilter, newFilter])
		}
	}

	const handleSubjectMatterFilter = (event) => {
		let newFilter = event.target.value;
		if (subjectMatterFilter.includes(newFilter)) {
			setSubjectMatterFilter(subjectMatterFilter.filter(filter => filter !== newFilter))
		} else {
			setSubjectMatterFilter([...subjectMatterFilter, newFilter])
		}
	}

	// This sets the filtered projects array every time a filter changes. This is because the show-per-page value will determine which page each project should be shown on, but this of course changes every time a filter changes the number of projects visible
	useEffect(() => {
		handleFilteredProjects()
	}, [subscriptionFilter, activityTypeFilter, yearLevelFilter, subjectMatterFilter, levelFilter, showFilter]);

	useEffect(()=>{
		setPageCount(Math.ceil(filteredProjects.length/showFilter))
		setPage(1)
	}, [filteredProjects])

	const handleFilteredProjects = () => {
		setFilteredProjects(
			projects.filter(project => {
				if (subscriptionFilter.length && !subscriptionFilter.includes(project.subscription)) return false
				if (activityTypeFilter.length && !activityTypeFilter.includes(project.activityType)) return false
				if (yearLevelFilter.length && !yearLevelFilter.includes(project.yearLevel)) return false
				if (subjectMatterFilter.length && !subjectMatterFilter.includes(project.subjectMatter)) return false
				if (levelFilter && levelFilter !== project.level) return false;
				return project
			}
			)
		)
	}

	useEffect(()=>window.scrollTo(0, 0),[page])

	const handlePageIncrement = (adjustment) => {
		setPage(page + adjustment)
	}

	const handlePageChange = (newPage) => {
		setPage(newPage)
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
			name: "Introduction7",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction8",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction9",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction10",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Introduction11",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		}
	];

	const filters = {
		subscription: ['Free', 'Premium'],
		activityType: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'],
		yearLevel: ['1-4', '5-6', '7-8', '9-13'],
		subjectMatter: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music']
	}

	// THEME
	const themeGrey = "#6c6c6c"

	const theme = createMuiTheme({
		typography: {
			fontFamily: "Open Sans",
			h1: {
				fontFamily: 'Nunito',
				fontWeight: 900,
			},
			h2: {
				fontFamily: 'Nunito',
				color: themeGrey
			},
			h3: {
				fontFamily: 'Nunito',
				color: themeGrey
			},
			h4: {
				fontFamily: 'Nunito',
				fontWeight: 900,
				margin: "0.5em 0",
				color: themeGrey
			},
			h5: {
				fontFamily: 'Nunito',
				fontWeight: 700,
				color: themeGrey
			},
			subtitle2: {
				color: themeGrey
			},
			overline: {
				color: themeGrey
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
						<Typography variant="h4">PROJECTS{showFilter*(page)+1}</Typography>
						<Button variant="contained" onClick={handleFilteredProjects}>Tester</Button>
						<Button variant="contained" onClick={() => console.log(filteredProjects)}>Console</Button>
						<Typography variant="subtitle2">Welcome to the project library. You can use the filters on the right to help you search for specific projects.</Typography>
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

							{/* Toggle Group for level filter */}
							<Grid item>
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

							{/* Toggle Group for amount of projects to show */}
							<Grid item>
								<Typography variant="overline" style={{ marginRight: '1em' }}>Show</Typography>
								<ToggleButtonGroup
									size="small"
									value={showFilter}
									exclusive
									onChange={handleShowFilter}
								>
									<ToggleButton value={6}>6</ToggleButton>
									<ToggleButton value={12}>12</ToggleButton>
									<ToggleButton value={100}>100</ToggleButton>
								</ToggleButtonGroup>
							</Grid>

						</Grid>

						{/* PROJECT ITEM */}
						<Grid item container>
							{/* LOOP THROUGH PROJECTS FROM FILTEREDPROJECTS STATE AND CREATE GRID ITEMS */}
							{
								filteredProjects.filter((e,i)=>(i>=showFilter*(page-1)) && (i<showFilter*(page))).map(project => (
									<ProjectItem
										project={project}
										// subscriptionFilter={subscriptionFilter}
										// activityTypeFilter={activityTypeFilter}
										// yearLevelFilter={yearLevelFilter}
										// subjectMatterFilter={subjectMatterFilter}
										// levelFilter={levelFilter}
									/>
								))
							}
						</Grid>

						<Grid item container direction="row" justify="center" spacing={2}>
							<Grid item>
								<ToggleButton onClick={()=>handlePageIncrement(-1)} disabled={page-1<1}>Prev</ToggleButton>
							</Grid>
							<Grid item>
								<ToggleButtonGroup
									// size="small"
									value={page}
									exclusive
									// onChange={handlePageChange}
								>
									{
										[...Array(pageCount)].map((e, i) => (
											<ToggleButton value={i+1} style={{ paddingLeft: "1em", paddingRight: "1em" }} onClick={()=>handlePageChange(i+1)}>{i+1}</ToggleButton>
										))
									}
								</ToggleButtonGroup>
							</Grid>
							<Grid item>
								<ToggleButton onClick={()=>handlePageIncrement(1)} disabled={page+1>pageCount}>Next</ToggleButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

			</Container>
		</ThemeProvider>
	)
}