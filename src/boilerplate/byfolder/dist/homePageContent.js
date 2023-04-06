const homePageContent = `import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Home from "../../components/Home";

const HomePage = () => {
  const classes = useStyles();
  const heading = "Home";
  const text = "This app is created by react-quick-builder.";

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Home heading={heading} text={text} />
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomePage;
`;

module.exports = { homePageContent };
