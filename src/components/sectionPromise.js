import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import SoaringImg from "./soaringImg";
import Player from "./sectionPlayer";
const styles = theme => ({
  root: {
    maxWidth: 960,
    width: "90%",
    margin: "0 auto"
    // padding: "64px 0"
  },
  img: {
    padding: 32,
    marginTop: 32
  },
  title: {
    color: "#c7656b",
    marginBottom: 16
  },
  desc: {
    padding: "0 32px 0 16px",
    textAlign: "left",
    color: theme.palette.shade,
    letterSpacing: 1,
    lineHeight: 1.8
  }
});
const SectionPromise = ({ classes, id }) => {
  return (
    <section className={classes.root} id={id}>
      <Typography variant="h2" color="primary" className={classes.title}>
        Expert care. Results-driven treatments. Affordable prices.
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography className={classes.desc} gutterBottom>
            At The Sakura Clinic, our first priority is always you. We believe
            that results-driven non-surgical cosmetic treatments should be
            available to everyone who would like to take advantage of their
            benefits, which is why we offer industry-leading treatments at
            prices which represent exceptional value – while never compromising
            on quality.
          </Typography>
          <Typography className={classes.desc} variant="subtitle1">
            VALUE AND QUALITY. YOU DESERVE THE BEST OF BOTH WORLDS.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.img}>
            <SoaringImg />
          </div>
        </Grid>
      </Grid>
      <Player />
    </section>
  );
};

export default withStyles(styles)(SectionPromise);
