import React from "react";
import "./MPProfileAvatar.css";
import { Avatar } from "@material-ui/core";

export default function MPProfileAvatar({ selectedStudent }) {
  return (
    <div className="avatarBlockMP">
      <div className="avatarMP">
        {/* <Avatar
          src={selectedStudent.profile_pic}
          style={{
            width: "100px",
            height: "100px",
          }}
        ></Avatar> */}
        bla
      </div>
      <button className="buttonMP">EDIT PROFILE</button>
      <br />
      <button className="buttonMP">CHANGE PHOTO</button>
    </div>
  );
}
