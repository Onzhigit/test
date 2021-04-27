import React from "react";
import giff from "../assets/giff.gif";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: 'center',
    backgroundColor: "white",
    height: "100vh",
  },
  img: {
    marginTop: 300,
    height: "20vh",
    
  },
  text: {
    marginTop: 200,
    fontSize: 20,
    
  },
}));

let Preloader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <img className={classes.img} src={giff} alt="" />
    </div>
  );
};

export default Preloader;
