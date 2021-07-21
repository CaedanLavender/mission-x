import React from "react";
import "./HelpRequests.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardReturnSharp } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "40px",
    height: "40px",
    margin: "10px",
  },
}));
export default function HelpRequests() {
  const [students, setStudents] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios.get("http://localhost:4000/help-requests").then((response) => {
      setStudents(response.data);
    });
  }, []);

  // This capitalisefunction doesn't work
  // function capitalise(string) {
  //   let text = string;
  //   text.toUpperCase();
  // }

  return (
    <div className="containerHR">
      {students.map((user) => (
        <div className="cardHR">
          <div className="checkboxHR">BOX</div>
          <div className="middleHR">
            <Avatar
              className={classes.avatarStyle}
              src={user.profile_pic}
            ></Avatar>
          </div>
          <div className="rightHR">
            <p className="studentNameHR">
              {user.first_name} needs help with [his or her] project.
              {user.date_created}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
