import React from "react";
import "./TeacherProfileViewer.css";
import TProfileAvatar from "../components/TeacherProfileViewer/TProfileAvatar";
import TProfileInfo from "../components/TeacherProfileViewer/TProfileInfo";

export default function TeacherProfileViewer(props) {
  return (
    <div className="containerProfileT">
      <TProfileAvatar user={props.user} />
      <TProfileInfo user={props.user} />
    </div>
  );
}
