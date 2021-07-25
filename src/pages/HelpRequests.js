import React from "react";
import "./HelpRequests.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

// Getting these checkboxes took me such a long to get working. I am so pleased they are now :D

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
}));

export default function HelpRequests() {
  const [checked, setChecked] = useState({});
  const [studentRequests, setStudentRequests] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios.get("http://localhost:4000/help-requests").then((response) => {
      setStudentRequests(response.data);
    });
  }, []);

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

  return (
    <div className="containerHR">
      {studentRequests.map((user) => (
        <div className="checkboxHR">
          <div>
            {/* When a checkbox is checked, store that checked box ID (set by user.id) and value (whether true/false) into a state object. The state stores multiple checkbox IDs/Values independently  */}
            <Checkbox
              onChange={(event) => {
                setChecked({
                  ...checked,
                  [user.user_id]: event.target.checked,
                });
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>

          <div
            className={
              checked[user.user_id] === true ? "cardHR checkedHR " : "cardHR "
            }
          >
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
