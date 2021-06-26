import React from "react";
import "./ProfileAvatar.css";
import { Avatar } from "@material-ui/core";

export default function ProfileAvatar() {
  return (
    <div className="avatarBlock">
      <div className="avatar">
        {/* <img
          src="https://material-ui.com/static/images/avatar/1.jpg"
          alt="Girl in a jacket"
          width="100"
          height="100"
        /> */}
        <Avatar
          src="https://material-ui.com/static/images/avatar/1.jpg"
          style={{
            width: "100px",
            height: "100px",
          }}
        ></Avatar>
      </div>
      <button className="button">EDIT PROFILE</button>
      <br />
      <button className="button">CHANGE PHOTO</button>
    </div>
  );
}
