import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: 150,
    padding: 16,
    background: theme.palette.primary.main
  },
  text: {
    color: "#ffffffa0",
    fontWeight: 300,
    fontSize: 12
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Typography className={classes.text}>
        &copy;2019 design&development OksLutsiv
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
