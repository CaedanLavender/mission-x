import React from "react";
import "./StudentProfiles.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "75px",
    height: "75px",
  },
}));

export default function StudentProfiles({ setSelectedUser }) {
  const [studentUsers, setStudentUsers] = useState([]);
  const classes = useStyles();

  // Need to update this useEffect once you figured out dymanic database input I think
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setStudentUsers(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    setSelectedUser(studentUsers[parseInt(event.currentTarget.id)]);
  };

  return (
    <div className="container">
      {studentUsers.map((user, index) => (
        <div className="card" onClick={handleSubmit} id={index}>
          <Link to="profile">
            <Avatar
              className={classes.avatarStyle}
              src={user.profile_pic}
            ></Avatar>
            <p className="studentName">
              {user.first_name} {user.last_name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
