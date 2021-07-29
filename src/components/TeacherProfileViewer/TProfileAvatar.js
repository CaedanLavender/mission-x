import React from "react";
import "./TProfileAvatar.css";
import { Avatar } from "@material-ui/core";

export default function TProfileAvatar(props) {
  return (
    <div className="avatarBlockT">
      <div className="avatarT">
        <Avatar
          src={props.user.profile_pic}
          style={{
            width: "100px",
            height: "100px",
          }}
        ></Avatar>
      </div>
      <button className="buttonT">EDIT PROFILE</button>
      <br />
      <button className="buttonT">CHANGE PHOTO</button>
    </div>
  );
}
