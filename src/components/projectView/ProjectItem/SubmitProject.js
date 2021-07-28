import axios from "axios";
import { useState, useEffect } from "react";

const SubmitProject = () => {

	// useEffect(() => {

	//  }, [image-upload]);

	const startUpload = () => {
		let formData = new FormData();
		let submissionFile = document.querySelector('#image-upload');
		console.log(submissionFile)
		formData.append("image", submissionFile.files[0])
		formData.append("user_id", "caedan the brave")
		axios.post('http://localhost:4000/upload', formData, {
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


	return (
		<>
			<h1>Hello World!2</h1>
			<form>
				<input type="file" id="image-upload" name="image" />
			</form>

			<button onClick={startUpload}>Upload</button>
		</>
	)
}

export default SubmitProject;