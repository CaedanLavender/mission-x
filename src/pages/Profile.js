import React from "react";
import "./Profile.css";
import ProfileAvatar from "../components/Profile/ProfileAvatar";
import ProfileInfo from "../components/Profile/ProfileInfo";

export default function Profile() {
  return (
    <div className="container">
      <ProfileAvatar />
      <ProfileInfo />
    </div>
  );
}
