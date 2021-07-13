import './Dashboard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import levelUpLogo from '../assets/global/star-logo.png';

import nzFlag from '../assets/global/nz-flag.png';
import maoriFlag from '../assets/global/maori-flag.png';

import progressIconLight from '../assets/global/progress--icon--light.png';
import progressIconDark from '../assets/global/progress--icon--dark.png';

import profileIcon from '../assets/global/profile--icon--light.png';
import settingsIcon from '../assets/global/settings--icon--light.png';
import logoutIcon from '../assets/global/logout--icon--light.png';


const ProjectDashboard = ({ match }) => {
	// STYLING
	const globalStyles = makeStyles((theme) => ({
		orangeButton: {
			color: 'white',
			background: '#E5AB2C',
			fontFamily: 'Nunito',
			fontWeight: '900',
			textTransform: 'none',
			padding: '0.3em 2em',
			'&:hover': {
				background: '#CC9213'
			}
		},
		pinkButton: {
			color: 'white',
			background: '#F91C85',
			fontFamily: 'Nunito',
			fontWeight: '900',
			textTransform: 'none',
			padding: '0.3em 2em',
			'&:hover': {
				background: '#E0036C'
			}
		},
		blueButton: {
			color: 'white',
			background: '#43C0F6',
			fontFamily: 'Nunito',
			fontWeight: '900',
			textTransform: 'none',
			padding: '0.3em 2em',
			'&:hover': {
				background: '#2AA7DD'
			}
		},
		tweakedLink: {
			textDecoration: 'none'
		}
	}));

	const global = globalStyles();

	// STATE
	const [tab, setTab] = useState('Progress Tracker');
	const [tabOpen, setTabOpen] = useState(true);

	// handles the changing tab by setting the tab state to the string that is passed in.
	// A simple shortcircut statement handles when null is passed in and sets tab to itself (no change in otherwords) -- possible side-effect being that the state is still updated so may trigger a potential useEffect if one was implemented in the future
	const changeTab = (newTab) => {
		setTab(newTab || tab)
	}
	const [project, setProject] = useState({});

	const fetchProject = (projectID) => {
		axios.get(`http://localhost:4000/project?project=${projectID}`)
			.then(res => {
				console.log(res.data[0])
				setProject(res.data[0])
			})
			.catch(() => console.log('There was a catch error'))
	}

	const tabList = [
		{
			name: "Learning Objectives",
			icon: {
				light: progressIconLight,
				dark: progressIconDark
			},
			linksto: null
		},
		{
			name: "Instructions",
			icon: {
				light: progressIconLight,
				dark: progressIconDark
			},
			linksto: null
		},
		{
			name: "Video Tutorial",
			icon: {
				light: progressIconLight,
				dark: progressIconDark
			},
			linksto: null
		},
		{
			name: "Preview Project",
			icon: {
				light: progressIconLight,
				dark: progressIconDark
			},
			linksto: null
		},
		{
			name: "Check Submissions",
			icon: {
				light: progressIconLight,
				dark: progressIconDark
			},
			linksto: null
		},
		{
			name: "Offline Activities",
			icon: {
				light: progressIconLight,
				dark: null
			},
			linksto: '#'
		},
		{
			name: "View Quiz Results",
			icon: {
				light: progressIconLight,
				dark: null
			},
			linksto: '#'
		}
	]



	const bottomTabList = [
		{
			name: "Profile",
			icon: profileIcon,
			linksto: '/components/Profile/Profile'
		},
		{
			name: "Settings",
			icon: settingsIcon,
			linksto: null
		},
		{
			name: "Log out",
			icon: logoutIcon,
			linksto: '/'
		}
	]

	return (
		<div className="wrapper">
			<div className="dashboard__toolbar">
				<img src={levelUpLogo} alt="Levelup Works logo" />
				<div className="dashboard__toolbar__flag-container">
					<img src={nzFlag} alt="Levelup Works logo" />
					<img src={maoriFlag} alt="Levelup Works logo" />
				</div>
			</div>
			<div className="dashboard__container">
				<div className={`container__panel--left`}>
					<div className='panel--left__item-wrapper'>
						<div className="panel--left__profile">
							<img src="" alt="" />
						</div>
						{
							tabList.map(item => (
								// I know it's shameful to include inline styling, but I just needed the stupid underline to go away -- simpler than makinng a whole theme/class
								<Link to={item.linksto || '#'} className={global.tweakedLink}>
									<div
										// Below is a shortcircuit statment that looks for the tab state and the item matching, if true, then include an additional class that applies the 'selected' styling
										className={`panel--left__item ${tab === item.name && "panel--left__item--selected"} ${!tabOpen && 'panel--left__item--closed'}`}
										// The ternary below is checking if there is a linksto property, if so, send null (this means that the tab is actually an external link and we do not want to run the tabchanging stuff), otherwise send the new tab into the changeTab function
										onClick={() => changeTab(item.linksto ? null : item.name)}
									>
										{/* Ternary in src is saying that if the tab state matches 'this' tab, then do the dark icon, otherwise do the light icon */}
										<img
											src={tab === item.name ? item.icon.dark : item.icon.light}
											alt={item.name + ""}
										/>
										{/* Below will hide the name of the tab if the tabOpen state is false */}
										{tabOpen && item.name}
									</div>
								</Link>
							))
						}
					</div>
					<div
						className={`panel--left__toggle ${tabOpen ? 'panel--left__toggle--open' : 'panel--left__toggle--closed'}`}
						onClick={() => setTabOpen(!tabOpen)}
					>
						<img src={require("../assets/global/left-pointing-caret.png").default} alt="arrow" />
					</div>
					<div className={`panel--left__bottom-navigation ${!tabOpen && 'panel--left__bottom-navigation--closed'}`}>
						{
							bottomTabList.map(item => (
								<Link to={item.linksto || '#'} className={global.tweakedLink}>
									<div>
										<img src={item.icon} alt={item.name} />
										{tabOpen && item.name}
									</div>
								</Link>
							))
						}
					</div>
				</div>
				<div className="container__panel--right">
					<div className="panel--right__buttonContainer">
						<Link>
							<Button className={global.orangeButton} variant="contained">Take Screenshot</Button>
						</Link>
						<Link>
							<Button className={global.pinkButton} variant="contained">Help Centre</Button>
						</Link>
						<Link to="/projectview">
							<Button className={global.blueButton} variant="contained" >More Projects</Button>
						</Link>
					</div>
					<div className="container__panel--right__inner">Content Goes here</div>
				</div>
			</div>
		</div>


	)
}

export default ProjectDashboard;