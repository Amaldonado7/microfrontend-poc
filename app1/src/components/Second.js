import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
}));

export default function Second() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Container
				maxWidth="sm"
				component="main"
				className={classes.heroContent}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					2nd Page
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="textSecondary"
					component="p"
				>
					Made on React too, root project is "App 1"
				</Typography>
			</Container>
		</React.Fragment>
	);
}
