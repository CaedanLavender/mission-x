import React from "react";
import "./HelpRequests.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardReturnSharp } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";

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

  // if (checked.isTrue === true) {
  //   console.log("it's true");
  // } else {
  //   console.log("it's false");
  // }
  console.log(checked);
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
        <div
          className={
            checked[user.user_id] === true ? "cardHR makeYellow" : "cardHR"
          }
          id={`divId${checked.user_id}`}
        >
          <div className="checkboxHR">
            <Checkbox
              onChange={(event) => {
                setChecked({
                  [user.user_id]: event.target.checked,
                  isTrue: event.target.checked,
                });
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
          <div className="middleHR">
            <Avatar
              className={classes.avatarStyle}
              src={user.profile_pic}
            ></Avatar>
          </div>
          <div className="rightHR">
            <p className="studentNameHR">
              {user.first_name}
              {user.user_id} needs help with [his or her] project.
              {user.date_created}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
