import "./App.css";
// Component imports
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import ProjectDashboard from "./pages/ProjectDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentProfileViewer from "./pages/StudentProfileViewer";
import TeacherProfileViewer from "./pages/TeacherProfileViewer";
import levelUpLogo from "./assets/Home-Page/Star-Logo-07-2@2x.png";
import nzFlag from "./assets/global/nz-flag.png";
import maoriFlag from "./assets/global/maori-flag.png";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
// React Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	let [selectedStudent, setSelectedStudent] = useState({});
	// State to keep track of who is logged in (temporary measure) initially it's empty to simulate no one being logged in
	const [user, setUser] = useState({
		user_id: null,
		first_name: "",
		role: "",
		school: "",
		teacher_name: "",
		course: "",
		date_of_birth: "",
		contact_number: "",
		email: "",
		profile_pic: "",
	});

	// If logged in user is a student, then make them the "selected student" to display in their profile viewer.
	if (user.role === "student") {
		selectedStudent = user;
	}

	const whoIsLoggedIn = function () {
		if (user.user_id === null) {
			return "REGISTER | LOGIN";
		} else if (user.user_id > 0) {
			return user.first_name;
		}
	};

	return (
		<div className="App">
			<Router>
				{/* Below is the navigation bar, it's just a material UI appbar for now, there are some dummy buttons in there to make sure Route works. This will need styled of course to match the design on the Adobe XD document */}
				<div className="navbar" position="static">
					<Switch>
						<Route
							exact
							path={[
								// A list of pages where the tab bar 'should' be displayed
								"/",
								"/projectview",
								"/teacher-profile-viewer",
								"/student-profile-viewer",
							]}
						>
							<div>
								<img
									className="levelUpLogo"
									src={levelUpLogo}
									alt="Levelup Works logo"
								/>
							</div>

							<div className="menu">
								<Link className="buttonNav" to="/">
									Home
								</Link>
								<Link className="buttonNav" to="/projectview">
									Project View
								</Link>
								<Link className="buttonNav" to="/teacher-dashboard">
									Teacher Dashboard
								</Link>
							</div>
							<div className="rightNav">
								<div className="language">
									LANG
									<img
										className="flagHome"
										src={nzFlag}
										alt="New Zealand Flag"
									/>
									<img className="flagHome" src={maoriFlag} alt="Maori Flag" />
								</div>
								<div className="loggedInUser">
									<Avatar
										className="avatarHome"
										style={{
											width: "24px",
											height: "24px",
											display: "flex",
											padding: "2px",
										}}
										src={user.profile_pic}
									></Avatar>
									{whoIsLoggedIn()}
								</div>
							</div>
						</Route>
					</Switch>
				</div>
				{/* Page renders below */}
				<Switch>
					{/* Temporary route for the homepage until it's built */}
					<Route path="/" exact render={() => <h1>HomePage</h1>}>
						<Home user={user} setUser={setUser} />
					</Route>

					<Route path="/projectview" exact>
						<ProjectView />
					</Route>

					{/* The slighty differen component render method here seems to be necessary to pass the match prop in -- match is needed for the project dahsboard to display individual projects (dynamic routing) */}
					<Route
						path="/projectview/projects/:id"
						render={({ match }) => (
							<ProjectDashboard match={match} user={user} setUser={setUser} />
						)}
					/>

					<Route path="/student-profile-viewer">
						<StudentProfileViewer selectedStudent={selectedStudent} />
					</Route>

					<Route path="/teacher-dashboard">
						<TeacherDashboard
							user={user}
							setUser={setUser}
							setSelectedStudent={setSelectedStudent}
						/>
					</Route>

					<Route path="/teacher-profile-viewer">
						<TeacherProfileViewer user={user} />
					</Route>

					{/* Add your page to the route by following the example above. */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
