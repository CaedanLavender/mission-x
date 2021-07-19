import "./App.css";
// Component imports
import NavigationBar from "./components/NavigationBar";
import ProjectView from "./pages/ProjectView";
import ProjectDashboard from "./pages/ProjectDashboard";
import Profile from "./pages/Profile";
import StudentProfiles from "./pages/StudentProfiles";

import { useState } from "react";
// React Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import AccessDenied from "./pages/AccessDenied";

function App() {
	const [selectedStudent, setSelectedStudent] = useState({});
	const [user, setUser] = useState({ name: 'Caedan', role: 'teacher' });

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
								"/profile",
								"/student-profiles",
							]}
						>
							<Toolbar className="menu">
								<Link to="/">Home |</Link>
								<Link to="/projectview"> Project View |</Link>
								<Link to="/profile">Profile View |</Link>
								<Link to="/teacher-dashboard">Teacher Dashboard |</Link>
								<Link to="/student-profiles">Student Profiles |</Link>
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
					
					<Route path="/projectview/projects/:id">
						<ProjectDashboard />
					</Route>
					
					<Route path="/profile">
						<Profile selectedStudent={selectedStudent} />
					</Route>

					<Route path="/teacher-dashboard">
						<TeacherDashboard
							user={user}
							setSelectedStudent={setSelectedStudent}
						/>
					</Route>
					
					<Route path="/student-profiles">
						<StudentProfiles setSelectedStudent={setSelectedStudent} />
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
