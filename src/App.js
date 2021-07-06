import "./App.css";
// Component imports
import NavigationBar from "./components/NavigationBar";
import ProjectView from "./ProjectView";
import Profile from "./components/Profile/Profile";

// React Router import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { TeacherDashboard } from "./pages/TeacherDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Bellow is the navigation bar, it's just a material UI appbar for now, there are some dummy buttons in there to make sure Route works. This will need styled of course to match the design on the Adobe XD document */}
        {/* <AppBar position="static">
          <Toolbar>
            <Link to="/">Home..</Link>
            <Link to="/projectview">Project View..</Link>
            <Link to="/components/Profile/Profile">Profile View..</Link>
				<Link to="/teacher-dashboard">Teacher Dashboard</Link> */}
            {/* Add more links here by following the format above */}
          {/* </Toolbar>
        </AppBar> */}
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/projectview" component={ProjectView} />
          <Route path="/components/Profile/Profile" component={Profile} />
			 <Route path="/teacher-dashboard" component={TeacherDashboard} />
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
