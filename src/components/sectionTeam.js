import React from "react";
import {
  withStyles,
  Grid,
  Typography,
  Paper,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import grundBg from "../images/cardBg.jpg";
import master1 from "../images/team/master1.png";
import master2 from "../images/team/master2.png";
import master3 from "../images/team/master3.png";
const styles = theme => ({
  root: {
    maxWidth: 960,
    width: "90%",
    margin: "32px auto 0",
  },
  title: {
    color: "#c6656b",
    padding: "0 0 32px 0",
  },
  card: {
    margin: 16,
    backgroundImage: `url(${grundBg})`,
    backgroundSize: "cover",
    padding: "34px",
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
  },
  cardInner: {
    background: "#ffffffaa",
  },
  desc: {
    textShadow: "0 2px 5px  white",
  },
});

const doctors = [
  ["dr.Maria", master1],
  ["dr.Helene", master2],
  ["dr.Irene", master3],
];
const SectionTeam = ({ classes, id }) => {
  return (
    <section id={id}>
      <Typography variant="h2" className={classes.title}>
        Our amazing doctors
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={classes.root}
      >
        {doctors.map((doctor, i) => (
          <Grid
            key={doctor[0]}
            item
            xs={12}
            sm={6}
            md={4}
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Paper className={classes.card} elevation={10}>
              <Paper elevation={10} className={classes.cardInner}>
                <CardMedia
                  image={doctor[1]}
                  style={{
                    marginTop: 0,
                    paddingBottom: "100%",
                    filter: `drop-shadow(-3px 10px 24px #7f585d60)`,
                  }}
                />
              </Paper>
              <div className={classes.desc}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {doctor[0]}
                  </Typography>
                  <Typography>
                    We have therefore found the best ways to improve skin
                    health. Suitable for most skin types including acne prone
                    skin.
                  </Typography>
                </CardContent>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default withStyles(styles)(SectionTeam);
