import React from "react";
import "./Profile.css";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  return (
    <div className="main">
      <ProfileAvatar />
      <ProfileInfo />
    </div>
  );
}
