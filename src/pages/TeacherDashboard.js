// CSS classnames follow rough BEM naming conventions: "__" to denote child item and "--" to denote modifier
// http://getbem.com/naming/

import { useState } from 'react';
import './TeacherDashboard.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const TeacherDashboard = () => {
	const [tab, setTab] = useState('Progress Tracker');

	const changeTab = (newTab) => {
		setTab(newTab)
	}

	const tabList = [
		{
			name: "Progress Tracker",
			icon: {
				light: require("../assets/teacher-dashboard/icons/progress--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/progress--icon--light.png").default
			},
			isTab: true
		},
		{
			name: "Student Profiles",
			icon: {
				light: require("../assets/teacher-dashboard/icons/student-profiles--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/student-profiles--icon--dark.png").default
			},
			isTab: true
		},
		{
			name: "Help Requests",
			icon: {
				light: require("../assets/teacher-dashboard/icons/help-requests--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/help-requests--icon--dark.png").default
			},
			isTab: true
		},
		{
			name: "Project Submissions",
			icon: {
				light: require("../assets/teacher-dashboard/icons/project-submissions--icon--light.png").default,
				dark: require("../assets/teacher-dashboard/icons/project-submissions--icon--dark.png").default
			},
			isTab: true
		},
		{
			name: "Project Library",
			icon: {
				light: require("../assets/teacher-dashboard/icons/project-library--icon--light.png").default,
				dark: null
			},
			isTab: true
		}
	]

	return (
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
				<div className="panel--left__profile"></div>
				{
					tabList.map(item => (
						<div
							className={`panel--left__item ${tab===item.name && "panel--left__item--selected"}`}
							onClick={()=>changeTab(item.name)}
						>
							<img src={item.icon.light} alt={item.name + ""}/>
							{item.name}
						</div>
					))
				}
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