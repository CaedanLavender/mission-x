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
		"Progress Tracker",
		"Student Profiles",
		"Help Requests",
		"Project Submissions",
		"Project Library",
	]

	return (
		<>
		<div className="dashboard__toolbar">
			<img src={require("../assets/Teacher--Student-Profiles/Star-Logo-07-3.png").default} alt="Levelup Works logo" />
			<div className="dashboard__toolbar__flag-container">
				<img src={require("../assets/Teacher--Student-Profiles/NZ-Flag.png").default} alt="Levelup Works logo" />
				<img src={require("../assets/Teacher--Student-Profiles/Maori-flag.png").default} alt="Levelup Works logo" />
			</div>
		</div>
		<div className="dashboard__container">
			<div className="container__panel--left">
				<div className="panel--left__profile"></div>
				{
					tabList.map(item => (
						<div
							className={`panel--left__item ${tab===item && "panel--left__item--selected"}`}
							onClick={()=>changeTab(item)}
						>{item}</div>
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
		</>
	)
}