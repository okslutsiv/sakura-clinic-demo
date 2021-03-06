import React from "react";
import {
  withStyles,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "64px auto 0",
    padding: 32,
    backgroundImage: `linear-gradient(135deg,${theme.palette.secondary.main}, ${
      theme.palette.primary.main
    })`,
    [theme.breakpoints.down("sm")]: {
      padding: "32px 8px 8px"
    },
    "&>div>div": {
      maxWidth: 600,
      width: "100%",
      color: "white",
      margin: "0 auto "
    }
  },
  itemText: { color: "white" },
  player: {
    padding: 0,
    overflow: "hidden"
  }
});
const SectionPlayer = ({ classes, id }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} md={6}>
        <Paper elevation={20} className={classes.player}>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              title="youtube"
              muted
              // resetOnEnd
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={`https://www.youtube.com/embed/r9Ia3mJHcIc`}
              frameBorder="0"
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} container justify="center">
        <List style={{ paddingLeft: 32 }}>
          <ListItem>
            <ListItemText
              classes={{
                primary: classes.itemText,
                secondary: classes.itemText
              }}
              primary="TRUSTED SINCE 1996"
              secondary="Our credibility has been earned through years of honesty and expertise"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              classes={{
                primary: classes.itemText,
                secondary: classes.itemText
              }}
              primary="QUALIFIED STAFF"
              secondary="All treatments are performed by fully qualified and highly experienced clinicians"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              classes={{
                primary: classes.itemText,
                secondary: classes.itemText
              }}
              primary="MEDICAL TEAM"
              secondary="All of our cosmetic injectors are required to undertake ongoing professional development "
            />
          </ListItem>
          <ListItem>
            <ListItemText
              classes={{
                primary: classes.itemText,
                secondary: classes.itemText
              }}
              primary="AFFORDABLE BEAUTY"
              secondary="We pride ourselves on offering exceptional value for money, without ever compromising on quality"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SectionPlayer);
