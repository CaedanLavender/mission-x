// import StudentProfiles from "../StudentProfiles/StudentProfiles";

const ProjectDashboardContent = ({ tab, project }) => {
	if (tab === "Learning Objectives") {
		return (
			<p>{project.learning_objective}</p>
		)
	} else {
		return (
			<h1>Something else</h1>
		)
	}

	// switch (tab) {
	// 	case 'Learning Objectives':
	// 		return (
	// 			<p>{project.learning_objective}</p>
	// 		)
	// 	case 'Instructions':
	// 		return (
	// 			<p>{tab}</p>
	// 		)
	// 	default:
	// 		return (
	// 			<p>{tab}</p>
	// 		)
	// }
}

export default ProjectDashboardContent;