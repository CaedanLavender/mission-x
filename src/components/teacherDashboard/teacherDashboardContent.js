import StudentProfiles from "../../pages/StudentProfiles";

const TeacherDashboardContent = (props) => {
  if (props.tab === "Student Profiles") {
    return <StudentProfiles />;
  } else {
    return <h1>Something else</h1>;
  }
};

export default TeacherDashboardContent;
