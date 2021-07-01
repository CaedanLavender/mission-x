import { useState } from 'react';
import './TeacherDashboard.css';
import Button from '@material-ui/core/Button';

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
		<div className="dashboard__container">
			<div className="dashboard__panel--left">
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
			<div className="dashboard__panel--right">
				<Button>Main thing</Button>
				<div className="dashboard__panel--right__inner">test</div>
			</div>
		</div>
	)
}