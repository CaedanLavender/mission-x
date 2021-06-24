import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Card } from "@material-ui/core"
import { CardMedia } from "@material-ui/core";

export default function ProjectView() {

	const projects = [
		{
			name: "Introduction",
			subscription: "Free",
			image: require("./assets/Projects-Page/Project-01.png").default,
			activityType: "Animation",
			yearLevel: "1-4",
			level: "Beginner",
			subjectMatter: "Computer Science",
		}
	];

	return (
		<Container maxWidth="xl" style={{backgroundColor: 'yellow', padding: '1em'}}>
			<Grid container spacing={2} style={{backgroundColor: 'orange'}}>
				<Grid item xs={3} lg={2} style={{backgroundColor: 'red'}}>
					<h1>NULL</h1>
				</Grid>
				<Grid item xs={9} lg={10} style={{textAlign: 'left', backgroundColor: 'blue'}}>
					<Typography variant="h4">PROJECTS</Typography>
					<p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
				</Grid>
				<Grid item xs={3}>
					<h3>Menu goes here</h3>
				</Grid>
				<Grid item xs={9} container spacing={5}>
					<Grid item xs={12}>menu stuff</Grid>
					{
						projects.map(x =>(
							<Grid item xs={4}>
									<CardMedia
										component="img"
										// height="140"
										alt={x.name}
										image={x.image}
									/>
								<Typography variant="h5">{x.name}</Typography>
								<Typography variant="overline">{x.level} | {x.activityType}</Typography>
							</Grid>
						))
					}
				</Grid>
			</Grid>
		</Container>
	)
}