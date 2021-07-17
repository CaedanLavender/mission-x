import React from "react";
import "./Profile.css";
import ProfileAvatar from "../components/Profile/ProfileAvatar";
import ProfileInfo from "../components/Profile/ProfileInfo";

export default function Profile({ selectedUser }) {
  return (
    <div className="containerProfile">
      <ProfileAvatar selectedUser={selectedUser} />
      <ProfileInfo selectedUser={selectedUser} />
    </div>
  );
}
