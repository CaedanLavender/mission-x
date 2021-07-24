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
  function date(date) {
    const dateObj = new Date(date); //returned from mysql timestamp/datetime field
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const dayOfWeek = dateObj.getUTCDay();
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = realDay(dayOfWeek) + ", " + day + "/" + month + "/" + year;
    return newdate;
  }

  function realDay(day) {
    let newDay;
    if (day === 0) {
      newDay = "Sunday";
    } else if (day === 1) {
      newDay = "Monday";
    } else if (day === 2) {
      newDay = "Tuesday";
    } else if (day === 3) {
      newDay = "Wednesday";
    } else if (day === 4) {
      newDay = "Thursday";
    } else if (day === 5) {
      newDay = "Friday";
    } else if (day === 6) {
      newDay = "Saturday";
    }
    return newDay;
  }

  useEffect(() => {
    axios.get("http://localhost:4000/help-requests").then((response) => {
      setStudentRequests(response.data);
    });
  }, []);

  // This capitalisefunction doesn't work
  // function capitalise(string) {
  //   let text = string;
  //   text.toUpperCase();
  // }

  return (
    <div className="containerHR">
      {studentRequests.map((user) => (
        <div className="checkboxHR">
          <div>
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
                {user.first_name} needs help with their project.
              </p>
            </div>
            <div className="rightCardHR">
              <p className="studentNameHR"> {date(user.date_created)}</p>

              <p className="studentNameHR">time</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
