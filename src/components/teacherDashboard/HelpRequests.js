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
}));

export default function HelpRequests() {
  const [completedRequests, setCompletedRequests] = useState({});
  const [studentRequests, setStudentRequests] = useState([]);
  const [check, setCheck] = useState(false);
  const [userNewId, setUserNewId] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/help-requests").then((response) => {
      setStudentRequests(response.data);
    });
  }, []);

  const classes = useStyles();
  console.log(completedRequests);
  console.log(userNewId);
  console.log(check);
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

  // function to make DB Post 1 or 0
  const checkedValue = function () {
    if (check === true) {
      return 1;
    } else {
      return 0;
    }
  };

  // function to make checkbox be true or false by default
  const defaultCheckedValue = function (value) {
    if (value === 1) {
      return true;
    } else {
      return false;
    }
  };

  const getUserId = function (id) {
    // console.log(toString(userId));
    setUserNewId(id);
  };

  // Update the database table's DONE column to "1" if checkbox becomes ticked.
  function updateDatabase() {
    axios
      .post("http://localhost:4000/help-requests-post", {
        user_id: userNewId,
        done: checkedValue(),
      })
      .then((response) => {
        console.log(response.status);
        console.log("Sent checkbox value to db");
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
        <div className="checkboxHR">
          <div>
            {/* When a checkbox is checked, store that checked box ID (set by user.id) and value (whether true/false) into a state object. The state stores multiple checkbox IDs/Values independently  */}
            <Checkbox
              defaultChecked={defaultCheckedValue(user.done)}
              onChange={(event) => {
                setCompletedRequests(
                  {
                    ...completedRequests,
                    [user.user_id]: event.target.checked,
                  },

                  setCheck(!check),
                  getUserId(user.user_id)
                );
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>

          <div
            className={
              completedRequests[user.user_id] ? "cardHR checkedHR " : "cardHR "
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
