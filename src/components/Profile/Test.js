import React from "react";
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

export default function Test() {
  const [loggedIn, setLoggedIn] = useState([]);

  const loggedInUser = () => {
    axios
      .get("http://localhost:4000/userslogged")
      .then((res) => {
        console.log(res.data[0]);
        setLoggedIn(res.data[0]);
      })
      .catch(() => console.log("Catch error fix meee"));
  };

  useEffect(() => {
    loggedInUser();
  }, []);

  return (
    <div className="container">
      <p>
        if working then should display something here: {loggedIn.first_name}
      </p>
      {/* {loggedIn.map((user) => (
        <div className="card">
          <Avatar
            className={classes.avatarStyle}
            src={user.profile_pic}
          ></Avatar>
          <p className="studentName">
            {user.first_name} {user.last_name}
          </p>
        </div>
      ))} */}
    </div>
  );
}
