import React from "react";
import clsx from "clsx";
import { Drawer, IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core";
import { Home as HomeIcon, Person as PersonIcon } from "@material-ui/icons";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FeedbackIcon from "@material-ui/icons/Feedback";
import GroupIcon from "@material-ui/icons/Group";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    display: "none",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

const Sidebar = ({ handleDrawerClose, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <Toolbar />
      <List component="nav">
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Главная страница" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Задачи" />
        </ListItem>
        <ListItem button component={Link} to="/messages">
          <ListItemIcon>
            <SpeakerNotesIcon />
          </ListItemIcon>
          <ListItemText primary="Сообщения" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Пользователь" />
        </ListItem>
        <ListItem button component={Link} to="/admin">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Пользователи" />
        </ListItem>
        <ListItem button component={Link} to="/feedback">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Отзывы" />
        </ListItem>
      </List>
      <div className={classes.toolbarIcon}>
        <Tooltip title="Скрыть меню">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Toolbar />
    </Drawer>
  );
};

export default Sidebar;
