import React from "react";
import "./Profile.css";
import ProfileAvatar from "../components/ProfileViewer/ProfileAvatar";
import ProfileInfo from "../components/ProfileViewer/ProfileInfo";

export default function Profile(props) {
  return (
    <div className="containerProfile">
      <ProfileAvatar selectedStudent={props.selectedStudent} />
      <ProfileInfo selectedStudent={props.selectedStudent} />
    </div>
  );
}
