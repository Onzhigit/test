import React from "react";
import { CssBaseline, Tooltip } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styles";
import { connect } from "react-redux";
import { logoutAction} from "../../actions/auth-actions";
import { RendererMenu } from "./RendererMenu";
import Sidebar from "./Sidebar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Preloader from "../../common/Preloader";

function NavBar({
  loading,
  logoutAction,

  children,
}) {


  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  if(loading) {
    return <Preloader />
  } 

  return (
    <>
      <div className={classes.root}>
    
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Tooltip title="Меню" placement="right">
              <IconButton color="inherit" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <RendererMenu
              className={classes.text}
              logoutAction={logoutAction}
        
            />
          </Toolbar>
        </AppBar>

        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

        <main className={classes.content}>
          <Toolbar />
          {children}
        </main>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,

});

const mapDispatchToProps = {
  logoutAction,
 
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
