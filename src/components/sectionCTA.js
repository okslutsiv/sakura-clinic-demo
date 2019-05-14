import React from "react";
import {
  withStyles,
  Grid,
  Typography,
  Button,
  Hidden
} from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: 80,
    padding: "32px 64px",
    background: theme.palette.tone + "a0"
  },
  btnCTA: {
    backgroundImage: `linear-gradient(-135deg, ${
      theme.palette.secondary.main
    }, ${theme.palette.primary.main})`,
    width: 150,
    color: "white",
    marginTop: 16,
    boxShadow: `0 10px 15px -2px ${theme.palette.secondary.main}aa,${
      theme.shadows[10]
    }`
  },
  title: {
    color: "#c7656b",
    marginBottom: 16
  },
  desc: {
    padding: "0 32px 0 16px",
    textAlign: "left",
    color: "white",
    letterSpacing: 1,
    lineHeight: 1.8
  }
});
const Section1 = ({ classes }) => {
  const goToElement = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };
  return (
    <div className={classes.root}>
      <Grid container justify="space-around" alignItems="center">
        <Hidden only="xs">
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCTA}
              onClick={goToElement}
            >
              Contact
            </Button>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={7}>
          <Typography className={classes.desc} gutterBottom>
            We believe that results-driven non-surgical cosmetic treatments
            should be available to everyone who would like to take advantage of
            their benefits, which is why we offer industry-leading treatments at
            prices which represent exceptional value – while never compromising
            on quality.
          </Typography>{" "}
          <Typography className={classes.desc} variant="subtitle1">
            BOOK YOUR APPOINTMENT NOW
          </Typography>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCTA}
              onClick={goToElement}
            >
              Contact
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Section1);
