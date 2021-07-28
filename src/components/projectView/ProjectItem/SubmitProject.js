import axios from "axios";
import { useState, useEffect } from "react";
import './SubmitProject.css'

const SubmitProject = ({ user, project }) => {
	const [projectSubmitted, setProjectSubmitted] = useState(false);

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

					<div className="submit-project__submit-button">test</div>
					<h1>Submit project photo</h1>
					<p>After completing your project, take a screenshot of your project and upload it here</p>
					<form>
						<input type="file" id="image-upload" name="image" />
					</form>

					<button onClick={startUpload}>Upload</button>
				</div>

				<div className="submit-project__half">
					<h1>Show your teacher</h1>
					<p>If your teacher is in the same room as you, click the button below to let them know you are done.</p>
				</div>

			</div>
		)
	}
}

export default SubmitProject;