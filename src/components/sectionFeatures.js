import React from "react";
import { withStyles, Grid, Typography, Paper } from "@material-ui/core";
import { AntyAge, Spa, Leaf, Spa1, Spa2, Flowers } from "./svgIcons";
import petal from "../images/petal.png";
import SectionCTA from "./sectionCTA";

const styles = theme => ({
  root: {
    maxWidth: 860,
    width: "90%",
    margin: "0px auto"
    // padding: "32px 0"
  },
  title: {
    color: theme.palette.primary.main,
    padding: "0 0 32px 0"
  },
  icon: {
    width: 52,
    height: 52,
    fill: "none ",
    stroke: theme.palette.primary.main,
    strokeWidth: 4
  },
  card: {
    borderBottom: "1px solid #7f585d40"
  },
  iconeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    backgroundImage: `url(${petal})`,
    backgroundSize: "cover",
    filter: `drop-shadow(0 3px 8px  ${theme.palette.tone}40)`
  },
  desc: {
    padding: "24px 24px 8px",
    textTransform: "capitalize",
    color: theme.palette.shade
  }
});
const SectionFeatures = ({ classes, id }) => {
  return (
    <section id={id}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h2" className={classes.title}>
          We offer modern, innovative and highly effective methods of skin
          rejuvenation and regeneration.
        </Typography>
        <Grid container justify="center">
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <AntyAge className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              skin rejuvenation
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health.
              Suitable for most skin types including acne prone skin.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <Spa className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              improved skin quality
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <Leaf className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              wrinkles elimination
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health
              including acne prone skin.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <Spa1 className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              {" "}
              skin lifting
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health.
              Suitable for most skin types including acne prone skin.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <Flowers className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              refractions elimination
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            justify="space-between"
            container
            alignItems="center"
            direction="column"
          >
            <div className={classes.iconeContainer}>
              <Spa2 className={classes.icon} />
            </div>
            <Typography className={classes.desc} variant="subtitle1">
              skin tone improvement
            </Typography>{" "}
            <Typography
              style={{ fontSize: 12, marginBottom: 36, padding: "0 16px" }}
            >
              We have therefore found the best ways to improve skin health
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <SectionCTA />
    </section>
  );
};

export default withStyles(styles)(SectionFeatures);
