const homeComponentContent = `import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Home = (props) => {
  const { heading, text } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h1" className={classes.heading}>
          {heading}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
        <Typography variant="body2" className={classes.link}>
          To learn more about react-quick-builder, visit{" "}
          <Link href="https://www.npmjs.com/package/react-quick-builder">
            https://www.npmjs.com/package/react-quick-builder
          </Link>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Home;
`;

module.exports = { homeComponentContent };
