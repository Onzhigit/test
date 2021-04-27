import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    
    border: "none",
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: "uppercase",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      backgroundPosition: "right",
    },
  },
  btn1: {
    backgroundImage: "linear-gradient(45deg, #0A363B, #EE5A24, #0A363B)",
  },
}));

export const SignInButton = () => {
  const classes = useStyles();
  return (
  <div className={classes.container}>
  <Button type="submit" className={`${classes.btn} ${classes.btn1}`}>Войти</Button>
  </div>
  );
};
