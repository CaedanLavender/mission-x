import React from "react";
import "./HelpRequests.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import DoneIcon from "@material-ui/icons/Done";

// Getting these checkboxes took me such a long to get working. I am so pleased they are now :D

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
  hideCard: { display: "none" },
}));

export default function HelpRequests() {
  const [completedRequests, setCompletedRequests] = useState({});
  const [studentRequests, setStudentRequests] = useState([]);
  const [hideMomentarily, setHideMomentarily] = useState({ 1: false });
  console.log(completedRequests);
  console.log(hideMomentarily);

  useEffect(() => {
    axios.get("http://localhost:4000/help-requests").then((response) => {
      setStudentRequests(response.data);
    });
  }, []);

  const classes = useStyles();

  // Take the SQL UTC date and convert it back to NZST, then return the formatted date.
  const formatDate = function (datetime) {
    let date = new Date(datetime);
    let options = {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      timeZone: "NZ",
    };
    let formattedDate = date.toLocaleString("en-NZ", options);
    return formattedDate;
  };

  // Take the SQL UTC time and convert it back to NZST, then return the formatted time.
  const formatTime = function (datetime) {
    let time = new Date(datetime);
    let options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "NZ",
    };
    let formattedTime = time.toLocaleString("en-NZ", options);
    return formattedTime;
  };

  // Capitalise the student's name
  function capitalise(string) {
    return string.toUpperCase();
  }

  // NEED TO UNDERSTAND THIS IMPORTANT FUNCTION
  function handleChange(e) {
    let temp = { ...completedRequests };
    temp[e.target.value] = e.target.checked;
    setCompletedRequests(temp);
  }

  // Update the help_requests table's DONE column to "1" if checkbox is ticked.
  function updateDatabase() {
    axios
      .post("http://localhost:4000/help-requests-post", {
        completed_requests: completedRequests,
      })
      .then((response) => {
        console.log(response.status);
        console.log(
          "help_requests table successfully updated (sincerely, frontend)"
        );
        setHideMomentarily(completedRequests);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="containerHR">
      <div className="cardHR2">
        <DoneIcon className="iconHR" onClick={updateDatabase} />
        <label className="iconHR" onClick={updateDatabase}>
          Mark As Done
        </label>
      </div>
      {studentRequests.map((user) => (
        <div
          className={
            hideMomentarily[user.user_id] ? "checkedHR " : "checkboxHR"
          }
        >
          <div>
            <Checkbox
              value={user.user_id}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>

          <div className="cardHR ">
            <div className="leftCardHR">
              <Avatar
                className={classes.avatarStyle}
                src={user.profile_pic}
              ></Avatar>
            </div>
            <div className="middleCardHR">
              <p className="studentNameHR">
                {capitalise(user.first_name)} needs help with their project.
              </p>
            </div>
            <div className="rightCardHR">
              <p className="dateHR"> {formatDate(user.date_created)}</p>

              <p className="dateHR">{formatTime(user.date_created)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
