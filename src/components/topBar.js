import React from "react";
import {
  AppBar,
  withStyles,
  Hidden,
  Button,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Sakura } from "../images/single-cherry-logo";

import ScrollSpy from "./scrollSpy";

const styles = theme => ({
  root: {
    color: "white"
  },
  ancor: {
    color: "currentColor",
    textDecoration: "none"
  },
  button: {
    color: "currentColor",
    fontSize: 12
  },
  active: {
    color: theme.palette.shade,
    fontSize: 14
  },
  branding: {
    color: "white",
    fontFamily: `'Ruthie', cursive`,
    textTransform: "capitalize",
    fontSize: 18
  },
  navigation: {
    marginLeft: "auto"
  }
});
const TopBar = ({ classes, menuItems, offset }) => {
  return (
    <AppBar color="primary" className="root">
      <Toolbar>
        <Button
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            })
          }
        >
          <Sakura width="30px" height="40px" fill="white" />
          <Hidden xsDown>
            <Typography inline className={classes.branding}>
              Sakura Clinic
            </Typography>
          </Hidden>
        </Button>
        <ScrollSpy menuItems={menuItems} offset={offset} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
