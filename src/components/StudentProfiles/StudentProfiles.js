import React from "react";
import "./StudentProfiles.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "75px",
    height: "75px",
  },
}));

export default function StudentProfiles() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setUsers(response.data);
    });
  });

  return (
    <div className="container">
      {users.map((user) => (
        <div className="card">
          <Avatar
            className={classes.avatarStyle}
            src={user.profile_pic}
          ></Avatar>
          <p className="studentName">
            {user.first_name} {user.last_name}
          </p>
        </div>
      ))}
    </div>
  );
}
