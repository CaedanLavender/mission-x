import axios from "axios";
import { useState, useEffect } from "react";
import './SubmitProject.css'
import { Button } from "@material-ui/core";

import sendPhotoIcon from "../../../assets/global/send-photo--icon.png";
import callTeacherIcon from "../../../assets/global/call-teacher--icon.png";
import callTeacherThumbnail from "../../../assets/global/call-teacher--thumbnail.png"

const SubmitProject = ({ user, project, global, sendHelpRequest }) => {
	const [projectSubmitted, setProjectSubmitted] = useState(false);
	const [fileAttach, setFileAttach] = useState(false);

	const checkFileAttach = () => {
		let submissionFile = document.querySelector('#image-upload');
		if (submissionFile.files[0]) setFileAttach(true)
		console.log(submissionFile)
	}

	const checkProjectProgress = () => {
		axios.get('http://localhost:4000/user/project-submissions', {
			params: {
				user_id: user.user_id,
				project_id: project.project_id
			}
		})
			.then(res => {
				console.log(res)
				setProjectSubmitted(res.data.projectSubmitted)
			})
			.catch(() => {
				console.log("There was a catch error")
			})
	}

	useEffect(() => {
		checkProjectProgress();
	}, []);

	const startUpload = () => {
		let formData = new FormData();
		let submissionFile = document.querySelector('#image-upload');
		if (!submissionFile.files[0]) {
			alert("No file uploaded")
			return null
		} 
		console.log(submissionFile)
		formData.append("image", submissionFile.files[0])
		formData.append("user_id", user.user_id)
		formData.append("project_id", project.project_id)
		axios.post('http://localhost:4000/project-submissions/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then(res => {
				console.log(res)
				checkProjectProgress()
			})
			.catch(() => {
				console.log("There was a catch error")
			})
	}

	if (projectSubmitted) {
		return (
			<h1>You have already submitted this project</h1>
		)
	} else {
		return (
			<div className="submit-project__container">
				<div className="submit-project__half">
				<img src={project.project_preview} alt=""/>
					<h1>Submit project photo</h1>
					<p>After completing your project, take a screenshot of your project and upload it here</p>
					<Button disabled={!fileAttach} className={`send-photo-button ${global.pinkButtonBig}`} onClick={startUpload} variant="contained">
								<div className="send-photo-button__inner">
								<img src={sendPhotoIcon} alt="send submission"/>
								<div>Send Photo</div>
								</div>
					</Button>
					<br/>
					<br/>
					<form>
						<label for="image-upload" className={`upload-screenshot-label ${global.pinkButton}`}>
							Upload screenshot
						</label>
						<input className="submit-project__browse-button" type="file" id="image-upload" name="image" onChange={()=>checkFileAttach()}/>
					</form>
				</div>

				<div className="submit-project__half">
					<img src={callTeacherThumbnail} alt="call a teacher"/>
					<h1>Show your teacher</h1>
					<p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
					<Button className={`send-photo-button ${global.pinkButtonBig}`} onClick={sendHelpRequest} variant="contained">
								<div className="send-photo-button__inner">
								<img src={callTeacherIcon} alt="call a teacher button"/>
								<div>Call Teacher</div>
								</div>
					</Button>
				</div>


			</div>
		)
	}
}

export default SubmitProject;