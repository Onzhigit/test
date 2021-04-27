import { makeStyles } from "@material-ui/core/styles";

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
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  formContent: {
    margin: theme.spacing(1),
  },
  container: {
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0A363B",
  },

  signButton: {
    margin: theme.spacing(1),
    color: "white",
    border: "none",
    width: 200,
    height: 50,
    borderRadius: 6,
    textTransform: "uppercase",
    backgroundColor: "#0A363B",
    "&:hover": {
      backgroundColor: "#333333",
    },
  },
  link: {
    color: "#0A363B"
  }
}));
