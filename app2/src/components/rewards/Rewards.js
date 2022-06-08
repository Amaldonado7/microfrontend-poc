import React from "react";
import {
	Button,
	Grid,
	Typography,
	Container,
	Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
	"@global": {
		a: {
			textDecoration: "none",
		},
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	}
}));

export default function Album() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							App2
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							My Root project is "App2"
						</Typography>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
}
