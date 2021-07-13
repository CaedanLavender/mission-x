import React from "react";
import "./ProfileInfo.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileInfo() {
  const [loggedIn, setLoggedIn] = useState([]);

  const loggedInUser = () => {
    axios
      .get("http://localhost:4000/userslogged")
      .then((res) => {
        console.log(res.data[0]);
        setLoggedIn(res.data[0]);
      })
      .catch(() => console.log("Catch error fix meee"));
  };

  useEffect(() => {
    loggedInUser();
  }, []);

  return (
    <div className="mainSection">
      <div className="infoBlock">
        <div>
          <h1 className="fullName">
            {loggedIn.first_name} {loggedIn.last_name}
          </h1>

          <table>
            <tbody>
              <tr>
                <td className="col1">School</td>
                <td>{loggedIn.school}</td>
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
                <td className="studentNo">{loggedIn.contact_number}</td>
              </tr>
              <tr>
                <td>Email address</td>
                <td className="studentEmail">{loggedIn.email}</td>
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
