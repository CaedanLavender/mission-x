import React from "react";
import "./Profile.css";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  return (
    <div className="container">
      <ProfileAvatar />
      <ProfileInfo />
    </div>
  );
}
