
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FiberManualRecord as FiberManualRecordIcon } from "@material-ui/icons";

import {useStyles} from "./styles";

const SidebarMenuItem = () => {
  const classes = useStyles();



  return (
    <ListItem button className={classes.nested} disabled>
      <ListItemIcon className={classes.subIcon}>
        <FiberManualRecordIcon className={classes.fiberManual} />
      </ListItemIcon>
      <ListItemText  />
    </ListItem>
  );
};


export default SidebarMenuItem;
