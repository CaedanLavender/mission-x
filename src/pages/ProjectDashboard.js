// import stylesheet and needed components
import "./Dashboard.css";
import ProjectDashboardContent from "../components/projectView/ProjectItem/ProjectDashboardContent";

// React imports and other libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Material UI imports
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// importing images from assets folder
import levelUpLogo from "../assets/global/star-logo.png";

import nzFlag from "../assets/global/nz-flag.png";
import maoriFlag from "../assets/global/maori-flag.png";

import learningObjectivesIconLight from "../assets/global/learning-objectives--icon--light.png";
import learningObjectivesIconDark from "../assets/global/learning-objectives--icon--dark.png";

import instructionsIconLight from "../assets/global/instructions--icon--light.png";
import instructionsIconDark from "../assets/global/instructions--icon--dark.png";

import videoTutorialIconLight from "../assets/global/video-tutorial--icon--light.png";
import videoTutorialIconDark from "../assets/global/video-tutorial--icon--dark.png";

import previewProjectIconLight from "../assets/global/preview-project--icon--light.png";
import previewProjectIconDark from "../assets/global/preview-project--icon--dark.png";

import checkSubmissionsIconLight from "../assets/global/project-submissions--icon--light.png";
import checkSubmissionsIconDark from "../assets/global/project-submissions--icon--dark.png";

import offlineActivitiesIconLight from "../assets/global/offline-activities--icon--light.png";

import viewQuizResultsIconLight from "../assets/global/view-quiz-results--icon--light.png";

import profileIcon from "../assets/global/profile--icon--light.png";
import settingsIcon from "../assets/global/settings--icon--light.png";
import logoutIcon from "../assets/global/logout--icon--light.png";

const ProjectDashboard = ({ match, user, setUser }) => {
  // STYLING -- used for the buttons, gets passed down to other components as 'global' for them to use
  const globalStyles = makeStyles((theme) => ({
    orangeButton: {
      color: "white",
      background: "#E5AB2C",
      fontFamily: "Nunito",
      fontWeight: "900",
      textTransform: "none",
      padding: "0.3em 2em",
      "&:hover": {
        background: "#CC9213",
      },
    },
    pinkButton: {
      color: "white",
      background: "#F91C85",
      fontFamily: "Nunito",
      fontWeight: "900",
      textTransform: "none",
      padding: "0.3em 2em",
      "&:hover": {
        background: "#E0036C",
      },
    },
    pinkButtonBig: {
      borderRadius: "10px",
      color: "white",
      background: "#F91C85",
      fontFamily: "Nunito",
      fontWeight: "900",
      textTransform: "none",
      padding: "1em",
      "&:hover": {
        background: "#E0036C",
      },
    },
    blueButton: {
      color: "white",
      background: "#43C0F6",
      fontFamily: "Nunito",
      fontWeight: "900",
      textTransform: "none",
      padding: "0.3em 2em",
      "&:hover": {
        background: "#2AA7DD",
      },
    },
    tweakedLink: {
      textDecoration: "none",
    },
  }));

  const global = globalStyles();

  // Tab list needs to be above state, because the tab state uses this object to figure out what the initial 'selected' tab should be
  const tabList = [
    // two sets of icons are included so that it knows which one to render
    // linksto is mostly unused, but is used to pass in another location if click the button needs to go somewhere instead of just triggering the conditional render
    // the permission propert contains an array of the roles that are allowed to see it, doing it this way allows for expansion in the future if extra roles are defined
    {
      name: "Learning Objectives",
      icon: {
        light: learningObjectivesIconLight,
        dark: learningObjectivesIconDark,
      },
      linksto: null,
      permission: ["student", "teacher"],
    },
    {
      name: "Instructions",
      icon: {
        light: instructionsIconLight,
        dark: instructionsIconDark,
      },
      linksto: null,
      permission: ["student", "teacher"],
    },
    {
      name: "Video Tutorial",
      icon: {
        light: videoTutorialIconLight,
        dark: videoTutorialIconDark,
      },
      linksto: null,
      permission: ["student", "teacher"],
    },
    {
      name: "Preview Project",
      icon: {
        light: previewProjectIconLight,
        dark: previewProjectIconDark,
      },
      linksto: null,
      permission: ["teacher"],
    },
    {
      name: "Make Project",
      icon: {
        light: previewProjectIconLight,
        dark: previewProjectIconDark,
      },
      linksto: null,
      permission: ["student"],
    },
    {
      name: "Check Submissions",
      icon: {
        light: checkSubmissionsIconLight,
        dark: checkSubmissionsIconDark,
      },
      linksto: null,
      permission: ["teacher"],
    },
    {
      name: "Submit Project",
      icon: {
        light: checkSubmissionsIconLight,
        dark: checkSubmissionsIconDark,
      },
      linksto: null,
      permission: ["student"],
    },
    {
      name: "Offline Activities",
      icon: {
        light: offlineActivitiesIconLight,
        dark: null,
      },
      linksto: "#",
      permission: ["teacher"],
    },
    {
      name: "Bonus Challenge",
      icon: {
        light: offlineActivitiesIconLight,
        dark: null,
      },
      linksto: "#",
      permission: ["student"],
    },
    {
      name: "View Quiz Results",
      icon: {
        light: viewQuizResultsIconLight,
        dark: null,
      },
      linksto: "#",
      permission: ["teacher"],
    },
    {
      name: "Take The Quiz",
      icon: {
        light: viewQuizResultsIconLight,
        dark: null,
      },
      linksto: "#",
      permission: ["student"],
    },
  ];

  // Setting all the states (you might wonder why they are down here, this is mostly so that the tab sate can be set after the tablist (above) is defined). I also wanted all the states to be together, so for that reason they are all down here vs just separating them out
  const [tab, setTab] = useState(tabList[0].name);
  const [tabOpen, setTabOpen] = useState(true);
  const [project, setProject] = useState({});
  const [projectCount, setProjectCount] = useState("");
  const [projectIndex, setProjectIndex] = useState("");

  // handles the changing tab by setting the tab state to the string that is passed in.
  // A simple shortcircut statement handles when null is passed in and sets tab to itself (no change in otherwords) -- possible side-effect being that the state is still updated so may trigger a potential useEffect if one was implemented in the future
  const changeTab = (newTab) => {
    // sets the tab to either the newTab or just itself in the event that nothing is passed in (this way it should still trigger the events that follow a state change)
    setTab(newTab || tab);
  };

  // Gets the project data based on the 'id' in the url (from the match prop passed in)
  const fetchProject = () => {
    axios
      .get(`http://localhost:4000/project?project=${match.params.id}`)
      .then((res) => {
        console.log(res.data[0]);
        setProject(res.data[0]);
      })
      .catch(() => console.log("There was a catch error"));
  };

  // Gets the number of projects (for the tracker dots at the top)
  const fetchProjectCount = () => {
    axios
      .get("http://localhost:4000/count?table=project")
      .then((res) => {
        setProjectCount(res.data.count);
      })
      .catch(() =>
        console.log("There was a catch error retrieving the project count")
      );
  };

  // an axios get method that fetches the index of a project -- you might wonder why I dont just use the projec id -- well, let me tell you...
  // the index only represents the order that the projects were added to the databse. What if in the future a project was added that actually needs to usurp the second project in terms of sequence. It might have an id of 99. So, but running this request, the backend is set up to send back the row index of where this project appears in a query that gets all projects and sorts them based on the 'project number' field -- the assumption here is that the project number field will always be alphabetically in order -- that is if naming conventions are followed. As a future addition, it could be worth adding an actual project order field, but this is fine for now.
  const getProjectIndex = () => {
    axios
      .get(`http://localhost:4000/projectindex?project=${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setProjectIndex(res.data.index);
      })
      .catch(() =>
        console.log("There was a catch error retrieving the project index")
      );
  };

  // Send a help request function START
  function updateDatabase() {
    axios
      .post("http://localhost:4000/help-requests-post-set", {
        userNeedingHelp: user,
      })
      .then((response) => {
        console.log(response.status);
        console.log("help_request sucessfully submitted (sincerely, frontend)");
        alert(
          `Hey ${user.first_name}, help requested submitted successfully, hang in there! :)`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Send a help request function END

  // the useeffect causes these functions to get run on the page render. This is critical so that the tracker dots and project content can be built (they require info from the database to work)
  useEffect(() => {
    fetchProject();
    fetchProjectCount();
    getProjectIndex();
  }, []);

  // buttons are in an array>object so that it can be expanded in the future if needed. Also makes the implementation further down easier to code and read
  const bottomTabList = [
    {
      name: "Profile",
      icon: profileIcon,
      linksto: "/student-profile-viewer",
      action: null,
    },
    {
      name: "Settings",
      icon: settingsIcon,
      linksto: null,
      action: null,
    },
    {
      name: "Log out",
      icon: logoutIcon,
      linksto: "/",
      //simple function that empties the user variable to simulate a log out
      action: function () {
        setUser({});
      },
    },
  ];

  return (
    <div className="wrapper">
      <div className="dashboard__toolbar">
        {/* Corner image, links back to home page */}
        <Link to="/">
          <img src={levelUpLogo} alt="Levelup Works logo" />
        </Link>
        <div className="project-tracker">
          <div className="project-tracker__title-container">
            <span className="project-tracker__title">Project</span>
            <span className="project-tracker__subtitle">
              {project.project_name}
            </span>
          </div>
          {/* Creates an new array with the projectCount as the size and then maps through it (alternative to a loop which react didn't seem to let me do here in the return statment) */}
          {[...Array(projectCount)].map((dot, iteration) => (
            <>
              {/* Conditionall applies the right styles to highlight the correct dot as the 'current' project */}
              <div
                className={`project-tracker__dot ${
                  projectIndex === iteration + 1 &&
                  "project-tracker__dot--active"
                }`}
              >
                {projectIndex === iteration + 1 && projectIndex}
              </div>
            </>
          ))}
        </div>
        <div className="dashboard__toolbar__flag-container">
          <img src={nzFlag} alt="Levelup Works logo" />
          <img src={maoriFlag} alt="Levelup Works logo" />
        </div>
      </div>
      <div className="dashboard__container">
        <div className={`container__panel--left`}>
          <div className="panel--left__item-wrapper">
            <div className="panel--left__profile">
              <img src={user.profile_pic} alt="" width={"100%"} />
            </div>
            {/* The filter below takes out the tabs that the user doesn't have permission to see (doesn't need to see) */}
            {tabList
              .filter((item) => item.permission.includes(user.role))
              .map((item) => (
                // shortcircuite expression to either drop in the place to link, or # if 'null' -- also styling to remove underlink from Link
                <Link to={item.linksto || "#"} className={global.tweakedLink}>
                  <div
                    // Below is a shortcircuit statment that looks for the tab state and the item matching, if true, then include an additional class that applies the 'selected' styling
                    className={`panel--left__item ${
                      tab === item.name && "panel--left__item--selected"
                    } ${!tabOpen && "panel--left__item--closed"}`}
                    // The ternary below is checking if there is a linksto property, if so, send null (this means that the tab is actually an external link and we do not want to run the tabchanging stuff), otherwise send the new tab into the changeTab function
                    onClick={() => changeTab(item.linksto ? null : item.name)}
                  >
                    {/* Ternary in src is saying that if the tab state matches 'this' tab, then do the dark icon, otherwise do the light icon */}
                    <img
                      src={tab === item.name ? item.icon.dark : item.icon.light}
                      alt={item.name + ""}
                    />
                    {/* Below will hide the name of the tab if the tabOpen state is false */}
                    {tabOpen && item.name}
                  </div>
                </Link>
              ))}
          </div>
          <div
            // ternary here checks if the tab is open and then applies the appropriate classname
            className={`panel--left__toggle ${
              tabOpen
                ? "panel--left__toggle--open"
                : "panel--left__toggle--closed"
            }`}
            // set's the tabOpen state to the opposite of what it was before
            onClick={() => setTabOpen(!tabOpen)}
          >
            <img
              src={require("../assets/global/left-pointing-caret.png").default}
              alt="arrow"
            />
          </div>
          <div
            className={`panel--left__bottom-navigation ${
              !tabOpen && "panel--left__bottom-navigation--closed"
            }`}
          >
            {/* This loops through the tab list array>object and renders the buttons including the functions they are supposed to perform or the places they are supposed to go*/}
            {bottomTabList.map((item) => (
              <Link
                to={item.linksto || "#"}
                className={global.tweakedLink}
                onClick={item.action}
              >
                <div>
                  <img src={item.icon} alt={item.name} />
                  {tabOpen && item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="container__panel--right">
          <div className="panel--right__buttonContainer">
            {/* Below are the three buttons in the upper right corner, they use the styles that are defined a couple of components up and passed down through the prop 'global' */}
            <Link className={global.tweakedLink}>
              <Button className={global.orangeButton} variant="contained">
                Take Screenshot
              </Button>
            </Link>
            <Link className={global.tweakedLink}>
              <Button
                className={global.pinkButton}
                onClick={updateDatabase}
                variant="contained"
              >
                Send a help request
              </Button>
            </Link>
            <Link to="/projectview" className={global.tweakedLink}>
              <Button className={global.blueButton} variant="contained">
                More Projects
              </Button>
            </Link>
          </div>
          <div className="container__panel--right__inner">
            <ProjectDashboardContent
              tab={tab}
              match={match}
              user={user}
              project={project}
              global={global}
              sendHelpRequest={updateDatabase}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
