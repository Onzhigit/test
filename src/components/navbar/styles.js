import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#0A363B",
  },
  drawer: {
    position: "relative",
    width: 150,
    flexShrink: 0,
  },
     drawerPaper: {
    position: "relative",
  
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }, 
/*   drawerPaper: {
    width: 150,
    backgroundColor: theme.palette.background.paper,
  }, */
  drawerContainer: {
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
  },
  text: {
    color: "black",
    textDecoration: "none",
  },
  menuText: {
    color: "black",
    textDecoration: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));
