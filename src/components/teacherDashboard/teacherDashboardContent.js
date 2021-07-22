import StudentProfiles from "../../pages/StudentProfiles";
import ProgressTracker from "./ProgressTracker";

const TeacherDashboardContent = (props) => {
	switch (props.tab) {
		case 'Progress Tracker':
			return <ProgressTracker />;
		case 'Student Profiles':
			return <StudentProfiles setSelectedStudent={props.setSelectedStudent} />;
		default:
			return <p>{props.tab}</p>
	}
};

export default TeacherDashboardContent;
