// CSS classnames follow rough BEM naming conventions: "__" to denote child item and "--" to denote modifier
// http://getbem.com/naming/

import { useState } from 'react';
import './TeacherDashboard.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const TeacherDashboard = () => {
	const [tab, setTab] = useState('Progress Tracker');
	const [tabOpen, setTabOpen] = useState(true);

	// handles the changing tab by setting the tab state to the string that is passed in.
	// A simple shortcircut statement handles when null is passed in and sets tab to itself (no change in otherwords) -- possible side-effect being that the state is still updated so may trigger a potential useEffect if one was implemented in the future
	const changeTab = (newTab) => {
		setTab(newTab || tab)
	}

	// Object list for tabs
	const tabList = [
		{
			name: "Progress Tracker",
			icon: {
				light: require("../assets/teacher-dashboard/icons/progress--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/progress--icon--dark.png").default
			},
			linksto: null
		},
		{
			name: "Student Profiles",
			icon: {
				light: require("../assets/teacher-dashboard/icons/student-profiles--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/student-profiles--icon--dark.png").default
			},
			linksto: null
		},
		{
			name: "Help Requests",
			icon: {
				light: require("../assets/teacher-dashboard/icons/help-requests--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/help-requests--icon--dark.png").default
			},
			linksto: null
		},
		{
			name: "Project Submissions",
			icon: {
				light: require("../assets/teacher-dashboard/icons/project-submissions--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/project-submissions--icon--dark.png").default
			},
			linksto: null
		},
		{
			name: "Project Library",
			icon: {
				light: require("../assets/teacher-dashboard/icons/project-library--icon--light.png").default,
				dark: null
			},
			linksto: "/projectview"
		}
	]

	const bottomTabList = [
		{
			name: "Profile",
			icon: require("../assets/teacher-dashboard/icons/profile--icon--light.png").default
		},
		{
			name: "Settings",
			icon: require("../assets/teacher-dashboard/icons/settings--icon--light.png").default
		},
		{
			name: "Log out",
			icon: require("../assets/teacher-dashboard/icons/logout--icon--light.png").default
		}
	]

	return (
		// Wrapper was introduced out of necessity as the stupid app wouldn't fill the screen -- I believe this comes from unwanted inheritance from app.js. Anyway, it's fixed now.
		// Wrapper is just a flex box with the main part (not the toolbar) set to have a flex-basis of 100% so that it tries to fill 100% but will accept anything lese (this will break if flex-shrink is changed, leave as default).
		<div className="wrapper">
			<div className="dashboard__toolbar">
				<img src={require("../assets/teacher-dashboard/images/star-logo.png").default} alt="Levelup Works logo" />
				<div className="dashboard__toolbar__flag-container">
					<img src={require("../assets/teacher-dashboard/images/nz-flag.png").default} alt="Levelup Works logo" />
					<img src={require("../assets/teacher-dashboard/images/maori-flag.png").default} alt="Levelup Works logo" />
				</div>
			</div>
			<div className="dashboard__container">
				<div className="container__panel--left">
					<div className="panel--left__item-wrapper">
						<div className="panel--left__profile">
						</div>
						{
							tabList.map(item => (
								// I know it's shameful to include inline styling, but I just needed the stupid underline to go away -- simpler than makinng a whole theme/class
								<Link to={item.linksto || '#'} style={{ textDecoration: 'none' }}>
									<div
										// Below is a shortcircuit statment that looks for the tab state and the item matching, if true, then include an additional class that applies the 'selected' styling
										className={`panel--left__item ${tab === item.name && "panel--left__item--selected"}`}
										// The ternary below is checking if there is a linksto property, if so, send null (this means that the tab is actually an external link and we do not want to run the tabchanging stuff), otherwise send the new tab into the changeTab function
										onClick={() => changeTab(item.linksto ? null : item.name)}
									>
										{/* Ternary in src is saying that if the tab state matches 'this' tab, then do the dark icon, otherwise do the light icon */}
										<img src={tab === item.name ? item.icon.dark : item.icon.light} alt={item.name + ""} />
										{item.name}
									</div>
								</Link>
							))
						}
					</div>
					<div className={`panel--left__toggle ${tabOpen?'panel--left__toggle--open':'panel--left__toggle--closed'}`}>
						<img src={require("../assets/teacher-dashboard/icons/left-pointing-caret.png").default} alt="arrow"/>
					</div>
					<div className="panel--left__bottom-navigation">
						{
							bottomTabList.map(item => (
								<div>
									<img src={item.icon} alt={item.name} />
									{item.name}
								</div>
							))
						}
					</div>
				</div>
				<div className="container__panel--right">
					<div className="panel--right__buttonContainer">
						<Link>
							<Button variant="contained">Take Screenshot</Button>
						</Link>
						<Link>
							<Button variant="contained">Help Centre</Button>
						</Link>
						<Link to="/projectview">
							<Button variant="contained" >More Projects</Button>
						</Link>
					</div>
					<div className="container__panel--right__inner">Content Goes here</div>
				</div>
			</div>
		</div>
	)
}