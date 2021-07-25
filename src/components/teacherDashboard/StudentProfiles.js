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

const StudentProfiles = (props) => {
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    props.setSelectedStudent(students[parseInt(event.currentTarget.id)]);
  };

  return (
    <div className="container">
      {students.map((user, index) => (
        <div className="card" onClick={handleSubmit} id={index}>
          <Link to="student-profile-viewer">
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
};

export default StudentProfiles;
