import axios from 'axios';
import { useState, useEffect } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
	const [projectCount, setProjectCount] = useState();
	const [progressData, setProgressData] = useState([]);


	const fetchProjectCount = () => {
		axios.get('http://localhost:4000/count?table=project')
			.then((res) => {
				console.log(res.data.count)
				setProjectCount(res.data.count)
			})
			.catch(() => console.log("There was a catch error retrieving the project count"))
	}

	const fetchProjectProgress = () => {
		axios.get('http://localhost:4000/progress')
			.then(res => {
				console.log(res.data)
				setProgressData(res.data)
			})
			.catch(() => console.log("There was a catch error retrieving the progress data"))
	}

	useEffect(() => {
		fetchProjectCount();
		fetchProjectProgress();
	}, []);

	return (
		<div className="progress-tracker-super">
			{
				progressData.map(row => (
					<div className="progress-tracker-container" >
						<div className="progress-tracker__text-container">
							<div className="progress-tracker__title">{row.name}</div>
							<div className="progress-tracker__subtitle">{row.completedProjects[0]?row.completedProjects.length:0}/{projectCount} Projects Completed</div>
						</div>
						<div className="progress-tracker__dot-container">
							<div className="progress-tracker__dot">
								1
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default ProgressTracker;