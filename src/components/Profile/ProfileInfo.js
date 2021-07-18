import React from "react";
import "./ProfileInfo.css";

export default function ProfileInfo(props) {
  return (
    <div className="mainSection">
      <div className="infoBlock">
        <div>
          <h1 className="fullName">
            {props.selectedStudent.first_name} {props.selectedStudent.last_name}
          </h1>

          <table>
            <tbody>
              <tr>
                <td className="col1">School</td>
                <td>{props.selectedStudent.school}</td>
              </tr>
              <tr>
                <td>Teacher</td>
                <td className="teacherName">Frank Fitzgerald</td>
              </tr>
              <tr>
                <td>Course</td>
                <td className="courseName">{props.selectedStudent.course}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td className="studentDob">
                  {props.selectedStudent.date_of_birth}
                </td>
              </tr>
              <tr>
                <td>Contact No</td>
                <td className="studentNo">
                  {props.selectedStudent.contact_number}
                </td>
              </tr>
              <tr>
                <td>Email address</td>
                <td className="studentEmail">{props.selectedStudent.email}</td>
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
