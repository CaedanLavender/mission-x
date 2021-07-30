import React from "react";
import "./StudentProfiles.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// The size of the avatar
const useStyles = makeStyles(() => ({
  avatarStyle: {
    width: "75px",
    height: "75px",
  },
}));

const StudentProfiles = (props) => {
  const [students, setStudents] = useState([]); // Stores the data received from the users table, into a state called Students
  const classes = useStyles();
  console.log(students);
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    // Upon clicking a student profile, get the ID of the selected card, find the corresponding data from the students array, then this store that data into "selectedStudent" state
    props.setSelectedStudent(students[parseInt(event.currentTarget.id)]);
    // props then sends the selected student upwards, so that the Profile Viewer can pull it through
  };

  // Each card is mapped out, with the ID of each card set as the user_id
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
