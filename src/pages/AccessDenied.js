import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"


const useStyles = makeStyles({
	test: {
		color: 'red'
	}
})

const AccessDenied = () => {
	const classes = useStyles()
	return (
		<div className={classes.test}>
		<h1>You don't have permission to view this page</h1>
		<Link to="/">Return to the home page</Link>
		</div>
	)
}

export default AccessDenied;