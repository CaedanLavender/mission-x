import "./App.css";
// Component imports
import NavigationBar from "./components/NavigationBar";
import ProjectView from "./pages/ProjectView";
import ProjectDashboard from "./pages/ProjectDashboard";
import StudentProfileViewer from "./pages/StudentProfileViewer";

import TeacherProfileViewer from "./pages/TeacherProfileViewer";

import { useState } from "react";
// React Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import AccessDenied from "./pages/AccessDenied";

function App() {
	let [selectedStudent, setSelectedStudent] = useState({});
	// State to keep track of who is logged in, at the moment I've just got an object with name and role. We should change this to be the id and the role so that we can query for more information where we need it. I think we should also leave in the role so that we can conditionally render without having to first search the database for the user's role
	const [user, setUser] = useState({
		user_id: 16,
		first_name: "Jasmina",
		role: "teacher",
		school: "Homai School",
		teacher_name: "Sally Rogers",
		course: "Beginner",
		date_of_birth: "25 June 1986",
		contact_number: "027000000",
		email: "jasmina@homaischool.com",
		profile_pic: "/images/profiles/jasmina-salvador.png",
	});

	// If logged in user is a student, then make them the "selected student" to display in their profile viewer.
	if (user.role === "student") {
		selectedStudent = user;
	}
	return (
		<div className="App">
			<Router>
				{/* Below is the navigation bar, it's just a material UI appbar for now, there are some dummy buttons in there to make sure Route works. This will need styled of course to match the design on the Adobe XD document */}
				<AppBar position="static">
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
							<Toolbar className="menu">
								<Link to="/">Home |</Link>
								<Link to="/projectview"> Project View |</Link>
								<Link to="/teacher-dashboard">Teacher Dashboard |</Link>

								{/* Add more links here by following the format above */}
							</Toolbar>
						</Route>
					</Switch>
				</AppBar>
				{/* Page renders below */}
				<Switch>
					<Route path="/" exact render={() => <h1>Home</h1>} />

					<Route path="/projectview" exact>
						<ProjectView />
					</Route>

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
			{/* Route stuff needs to go here so that each of our components will render based on url ending with /whatever */}
			{/* ...I'm assuming that's how they want us to do it :) */}
			{/* Fay, I'm thinking that you build the homepage in a separate file (something like Home.js) and then we can import it to this location into the routes etc. */}
		</div>
	);
}

export default App;
