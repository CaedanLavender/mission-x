import React from "react";
import "./MyProfile.css";
import MPProfileAvatar from "../components/MyProfile/MPProfileAvatar";
import MPProfileInfo from "../components/MyProfile/MPProfileInfo";

export default function MyProfile(props) {
  return (
    <div className="containerProfileMMP">
      <MPProfileAvatar user={props.user} />
      <MPProfileInfo user={props.user} />
    </div>
  );
}
