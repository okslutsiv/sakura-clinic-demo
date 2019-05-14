import React from "react";
import { withStyles } from "@material-ui/core";
import image from "../images/cherry-blossom.png";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    width: "100%",
    marginLeft: "auto",
    color: "black",
    position: "relative",
    animationName: "slideRightLeft",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDuration: "6s",
    animationDelay: "1s"
  },
  img: {
    width: "90%",
    height: "auto",
    position: "relative",
    filter: `drop-shadow(-3px 10px 24px ${theme.palette.tone}60)`,
    animationName: "slideRightLeft",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDuration: "6s"
  },
  scattering: {
    backgroundImage: `url('${image}')`,
    opacity: 0.4,
    width: "90%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transform: `scale(0.9, -0.4) translateY(-120%)`,
    filter: "blur(10px) grayscale(0.2)"
  },
  reflection: {
    backgroundImage: `url('${image}')`,
    opacity: 0.4,
    width: "90%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transform: `scale(0.8, -0.2) translate(10%, -220%)`,
    filter: "grayscale(0.8) blur(2px)"
  },
  shadow2: {
    backgroundImage: "radial-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0))",
    opacity: 0.1,
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    filter: "blur(12px)",
    transform: `scale(0.3, 0.1) translate(50%, 450%)`
  },
  "@keyframes slideRightLeft": {
    "0%": { transform: " translateX(-4px)" },
    "33%": { transform: " translate(5px,2px)" },
    "66%": { transform: " translate(0px,-2px)" },
    "100%": { transform: " translateX(-4px)" }
  },
  container: {
    animationName: "$slideRightLeft"
  }
});

const HeroImg = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.shadow2} />
      <div className={classes.scattering} />
      <div className={classes.reflection} />
      <img src={image} alt="cherry blossom" className={classes.img} />
    </div>
  );
};

export default withStyles(styles)(HeroImg);
