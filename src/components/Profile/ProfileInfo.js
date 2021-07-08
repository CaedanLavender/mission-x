import React from "react";
import "./ProfileInfo.css";

export default function ProfileInfo() {
  return (
    <div className="mainSection">
      <div className="infoBlock">
        <div>
          <h1 className="fullName">Frankie</h1>

          <table>
            <tbody>
              <tr>
                <td className="col1">School</td>
                <td>Homai School</td>
              </tr>
              <tr>
                <td>Teacher</td>
                <td className="teacherName">Jasmina Salvador</td>
              </tr>
              <tr>
                <td>Course</td>
                <td className="courseName">Beginner</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td className="studentDob">25 June 2010</td>
              </tr>
              <tr>
                <td>Contact No</td>
                <td className="studentNo">022 524 6399</td>
              </tr>
              <tr>
                <td>Email address</td>
                <td className="studentEmail">fletchy.r@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="backButtonMain">
        <a href="/ProjectView/">
          <button className="backButton">BACK TO PROJECTS</button>
        </a>
      </div>
    </div>
  );
}
