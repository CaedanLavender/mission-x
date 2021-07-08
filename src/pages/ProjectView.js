// LIBRARY IMPORTS
import { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

// COMPONENT IMPORTS
import Filter from '../components/projectView/Filter';
import ProjectItem from '../components/projectView/ProjectItem';
import PageToggle from '../components/projectView/PageToggle';
import ShowFilter from '../components/projectView/ShowFilter';
import LevelFilter from '../components/projectView/LevelFilter';

export default function ProjectView() {
	// STATE HOOKS
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
		setShowFilter(newShowFilter || showFilter);
	}

	// SHOW PER PAGE HANDLER
	const handleLevelFilter = (event, newLevelFilter) => {
		setLevelFilter(newLevelFilter);
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

	// This updates the pageCount and page state every time the filteredProjects changes. It's in a separate useEffect so that the filteredProjects can complete it's change before triggering these updates
	useEffect(()=>{
		setPageCount(Math.ceil(filteredProjects.length/showFilter))
		setPage(1)
	}, [filteredProjects])

	// Refilters the projects based on all the filters. This could pottentially be made more efficient by splitting all of this out into separate functions so that it's only refiltering based on the specific filter that changed instead of rechecking everything, but the return wouldn't be that great for the amount of effort put in
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

	// A simple useEffect that scrolls to the top when the page variable is updated. In other words, when the user changes page.
	useEffect(() => window.scrollTo(0, 0),[page])

	// Adds the adjustment (which will be either 1 or -1) to the page state which, in other words, just bumps it up or down
	const handlePageIncrement = (adjustment) => setPage(page + adjustment)

	// Simply directly updates the current page
	const handlePageChange = (newPage) => setPage(newPage)

	// OBJECTS
	const projects = [
		{
			name: "Introduction",
			subscription: "Free",
			image: '/images/Projects-Page/Project-01.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "My Birthday",
			subscription: "Free",
			image: '/images/Projects-Page/Project-02.png',
			activityType: "Animation",
			yearLevel: "5-6",
			level: "Intermediate",
			subjectMatter: "Computer Science",
		},
		{
			name: "10 Block Challenge",
			subscription: "Free",
			image: 'images/Projects-Page/Project-03.png',
			activityType: "Game",
			yearLevel: "5-6",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Build a band",
			subscription: "Free",
			image: 'images/Projects-Page/Project-04.png',
			activityType: "Game",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "The bear and the monkey",
			subscription: "Free",
			image: 'images/Projects-Page/Project-05.png',
			activityType: "Augmented Reality",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Debugging",
			subscription: "Free",
			image: 'images/Projects-Page/Project-06.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 7",
			subscription: "Free",
			image: 'images/Projects-Page/Project-07.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Intermediate",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 8",
			subscription: "Free",
			image: 'images/Projects-Page/Project-08.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Intermediate",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 9",
			subscription: "Premium",
			image: 'images/Projects-Page/Project-09.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 10",
			subscription: "Free",
			image: 'images/Projects-Page/Project-10.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 11",
			subscription: "Premium",
			image: 'images/Projects-Page/Project-11.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 12",
			subscription: "Premium",
			image: 'images/Projects-Page/Project-12.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		},
		{
			name: "Project 13",
			subscription: "Free",
			image: 'images/Projects-Page/Project-13.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Advanced",
			subjectMatter: "Computer Science",
		},	
		{
			name: "Project 14.1",
			subscription: "Premium",
			image: 'images/Projects-Page/Project-14.1.png',
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Advanced",
			subjectMatter: "Computer Science",
		}
	];

	// An object containing all of the filters and their options for the sake of dynamically generating the filters --- this is soley because I am lazy
	const filters = {
		subscription: ['Free', 'Premium'],
		activityType: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'],
		yearLevel: ['1-4', '5-6', '7-8', '9-13'],
		subjectMatter: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music']
	}

	// simply setting the 
	const themeGrey = "#6c6c6c"
	
	// THEME -- may get rid of in favor of something more global, but this will do for now
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

	const useStyles = makeStyles({
		mainContainer: {
			padding: '2em'
		},
		headingContainer: {
			textAlign: 'left'
		}
	})

	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl" className={classes.mainContainer}>
				<Grid container spacing={6}>

					{/* BLANK SPACE */}
					<Grid item xs={3} xl={2}>
					</Grid>

					{/* HEADING CONTAINER */}
					<Grid item xs={9} xl={10} className={classes.headingContainer}>
						<Typography variant="h4">PROJECTS</Typography>  
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
							<LevelFilter
								levelFilter={levelFilter}
								handleLevelFilter={handleLevelFilter}
							/>

							<ShowFilter 
								showFilter={showFilter}
								handleShowFilter={handleShowFilter}
							/>
						</Grid>

						{/* PROJECT ITEM */}
						<Grid item container>
							{/* LOOP THROUGH PROJECTS FROM FILTEREDPROJECTS STATE AND CREATE GRID ITEMS */}
							{
								filteredProjects.filter((e,i)=>(i>=showFilter*(page-1)) && (i<showFilter*(page))).map(project => (
									<ProjectItem project={project}/>
								))
							}
						</Grid>

						<PageToggle
							handlePageIncrement={handlePageIncrement}
							handlePageChange={handlePageChange}
							page={page}
							pageCount={pageCount}
						/>

					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	)
}