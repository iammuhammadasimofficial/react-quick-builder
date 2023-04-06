const homeComponentStyles = `import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  heading: {
    fontSize: "4rem",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  text: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  link: {
    fontSize: "1rem",
    marginTop: "2rem",
    textAlign: "center",
  },
}));

export default useStyles;
`;

module.exports = { homeComponentStyles };
