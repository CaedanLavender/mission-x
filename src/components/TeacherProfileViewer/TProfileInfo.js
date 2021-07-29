import React from "react";
import "./TProfileInfo.css";

export default function TProfileInfo(props) {
  function birthdate(date) {
    const dateObj = new Date(date); //returned from mysql timestamp/datetime field
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = day + "/" + month + "/" + year;
    return newdate;
  }

  return (
    <div className="mainSectionT">
      <div className="infoBlockT">
        <div>
          <h1 className="fullNameT">{props.user.first_name}</h1>

          <table>
            <tbody>
              <tr>
                <td className="col1T">School</td>
                <td>{props.user.school}</td>
              </tr>
              <tr>
                <td>Course</td>
                <td>{props.user.course}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>{props.user.date_of_birth}</td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>{props.user.contact_number}</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>{props.user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="backButtonContainerT">
        <a href="/projectview/">
          <button className="projectsButtonT">BACK TO PROJECTS</button>
        </a>
        <a href="/teacher-dashboard/">
          <button className="dashboardButtonT">BACK TO DASHBOARD</button>
        </a>
      </div>
    </div>
  );
}
