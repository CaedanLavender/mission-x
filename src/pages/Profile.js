import React from "react";
import "./Profile.css";
import ProfileAvatar from "../components/Profile/ProfileAvatar";
import ProfileInfo from "../components/Profile/ProfileInfo";

export default function Profile(props) {
  return (
    <div className="containerProfile">
      <ProfileAvatar selectedStudent={props.selectedStudent} />
      <ProfileInfo selectedStudent={props.selectedStudent} />
    </div>
  );
}
