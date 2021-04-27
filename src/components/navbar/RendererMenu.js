import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";
import {Tooltip} from "@material-ui/core";

export const RendererMenu = ({ logoutAction, openAddTask, userInfo }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    logoutAction();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/admin" className={classes.menuText}>
        <MenuItem onClick={handleMenuClose}>Админская панель</MenuItem>
      </Link>
      <Link to="/settings" className={classes.menuText}>
        <MenuItem>Найстройки</MenuItem>
      </Link>
      <Link to="/signin" className={classes.menuText}>
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow} />
      <Tooltip title="Создать задачу">
      <IconButton color="inherit" onClick={openAddTask}>
        <AddIcon />
      </IconButton>
      </Tooltip>
      <Typography style={{color: "#ffebee"}}>
      Пользователь : 
      </Typography>
     
      <IconButton
        edge="end"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </>
  );
};
