import React from "react";
import "./StudentProfileViewer.css";
import ProfileAvatar from "../components/StudentProfileViewer/ProfileAvatar";
import ProfileInfo from "../components/StudentProfileViewer/ProfileInfo";

export default function StudentProfileViewer(props) {
  return (
    <div className="containerProfile">
      <ProfileAvatar selectedStudent={props.selectedStudent} />
      <ProfileInfo selectedStudent={props.selectedStudent} />
    </div>
  );
}
