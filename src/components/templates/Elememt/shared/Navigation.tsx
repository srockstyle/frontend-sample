// import { makeStyles } from "@material-ui/core";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
// import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import React from "react";

type HeaderNavItem = {
  label: string;
  link: string;
};

const drawerWidth = 240;

type Anchor = "top" | "left" | "bottom" | "right";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "gray",
  },
});

export const Navigation: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="news">
          <ListItemIcon></ListItemIcon>
          <Link to="/" className={classes.link}>
            <ListItemText primary="news" />
          </Link>
        </ListItem>
        <ListItem button key="world">
          <ListItemIcon></ListItemIcon>
          <Link to="/world" className={classes.link}>
            <ListItemText primary="world" />
          </Link>
        </ListItem>
        <ListItem button key="character">
          <ListItemIcon></ListItemIcon>
          <Link to="/character" className={classes.link}>
            <ListItemText primary="character" />
          </Link>
        </ListItem>
        <ListItem button key="gallery">
          <ListItemIcon></ListItemIcon>
          <Link to="/gallery" className={classes.link}>
            <ListItemText primary="gallery" />
          </Link>
        </ListItem>
        <ListItem button key="contact">
          <ListItemIcon></ListItemIcon>
          <Link to="/form" className={classes.link}>
            <ListItemText primary="contact" />
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer("left", true)}>Menu</Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
