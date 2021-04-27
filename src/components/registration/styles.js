import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

export const orangeTheme = createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});

export const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
  },

  card: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContent: {
    marginTop: 70,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0A363B",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  formInput: {
    margin: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    color: "#0A363B"
  },
  signButton: {
    margin: theme.spacing(1),
    color: "white",
    border: "none",
    width: 220,
    height: 55,
    borderRadius: 6,
    textTransform: "uppercase",
    backgroundColor: "#0A363B",
    "&:hover": {
      backgroundColor: "#333333",
    },
  },
}));
