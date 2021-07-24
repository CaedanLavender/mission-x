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

  // function checkboxValue(newValue) {
  //   setChecked({
  //     isChecked: { checked },
  //     userIdCheckbox: newValue.target.id,
  //     newCheck: newValue,
  //   });
  //   console.log(newValue.target.id, newValue.target.checked);
  //   console.log(checked);
  // }

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
      {studentRequests.map((user, index) => (
        <div className="cardHR">
          <div key={index} className="checkboxHR">
            <Checkbox
              value={checked[user.user_id]}
              onChange={(newValue) => {
                setChecked({
                  ...checked,
                  [user.user_id]: newValue.target.id,
                });
                console.log(checked);
              }}
              // checked={checked[0]}

              id={`custom-checkbox-${user.user_id}`}
              // onChange={checkboxValue}
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
