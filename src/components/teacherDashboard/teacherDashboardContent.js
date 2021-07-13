import StudentProfiles from "../StudentProfiles/StudentProfiles";

const TeacherDashboardContent = ({ tab }) => {
	if (tab === "Student Profiles") {
		return(
			<StudentProfiles />
		)
	} else {
		return(
			<h1>Something else</h1>
		)
	}
}

export default TeacherDashboardContent;