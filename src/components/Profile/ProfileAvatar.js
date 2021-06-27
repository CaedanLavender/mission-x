import React from "react";
import "./ProfileAvatar.css";
import { Avatar } from "@material-ui/core";
import userPic from "./userPic.png";

export default function ProfileAvatar() {
  return (
    <div className="avatarBlock">
      <div className="avatar">
        <Avatar
          src={userPic}
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
