import React from "react";
import "./TProfileAvatar.css";
import { Avatar } from "@material-ui/core";

export default function TProfileAvatar({ selectedStudent }) {
  return (
    <div className="avatarBlockT">
      <div className="avatarT">
        {/* <Avatar
          src={selectedStudent.profile_pic}
          style={{
            width: "100px",
            height: "100px",
          }}
        ></Avatar> */}
        [Pic]
      </div>
      <button className="buttonT">EDIT PROFILE</button>
      <br />
      <button className="buttonT">CHANGE PHOTO</button>
    </div>
  );
}
