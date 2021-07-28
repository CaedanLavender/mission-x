import StudentProfiles from "./StudentProfiles";
import ProgressTracker from "./ProgressTracker";
import HelpRequests from "./HelpRequests";

const TeacherDashboardContent = (props) => {
	switch (props.tab) {
		case "Progress Tracker":
			return <ProgressTracker />;
		case "Student Profiles":
			return <StudentProfiles setSelectedStudent={props.setSelectedStudent} />;
		case "Help Requests":
			return <HelpRequests />;
			
		default:
			return <p>{props.tab}</p>;
	}
};

export default TeacherDashboardContent;
