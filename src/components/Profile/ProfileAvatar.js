import React from "react";
import "./ProfileAvatar.css";
import { Avatar } from "@material-ui/core";

export default function ProfileAvatar({ selectedStudent }) {
  return (
    <div className="avatarBlock">
      <div className="avatar">
        <Avatar
          src={selectedStudent.profile_pic}
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
