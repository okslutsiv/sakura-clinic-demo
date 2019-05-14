import React, { useRef, useState, useLayoutEffect } from "react";
import heroBg from "../images/CherryBlossomBgDark.jpg";
import { Sakura } from "../images/single-cherry-logo";
import { Typography, withStyles, Paper, Fade } from "@material-ui/core";

const styles = theme => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.tone + "80",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundAttachment: "fixed",
    textAlign: "left"
  },
  frozen: {
    position: "absolute",
    top: 160,
    width: "80%",
    left: "10%",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundAttachment: "fixed",
    border: "3px solid #fff",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      maxWidth: 600,
      left: (window.innerWidth - 600) / 2
    },

    "&::before": {
      content: '""',
      background: "inherit",
      position: "absolute",
      left: -10,
      right: -10,
      top: -10,
      bottom: -10,
      filter: "blur(3px)",
      boxShadow: `inset 0 0 0 300px ${theme.palette.tone}80 `
    }
  },
  content: {
    position: "absolute",
    padding: 32,
    margin: "18px auto",
    textAlign: "center"
  },
  btnCTA: {
    width: 150,
    color: "white"
  },
  brand: {
    color: "white",
    fontFamily: `'Ruthie', cursive`,
    textTransform: "capitalize",
    fontSize: 85,
    textAlign: "center",
    paddingTop: 8,
    zIndex: 10
  },
  desc: {
    color: "white",
    paddingBottom: 8,
    zIndex: 10
  }
});
function useContentRect(ref) {
  const [contentRect, setContentRect] = useState(
    ref.current ? ref.current.getBoundingClientRect() : {}
  );
  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new window.ResizeObserver(entries =>
      setContentRect(entries[0].contentRect)
    );
    observer.observe(ref.current);
    return () => observer.disconnect(ref);
  }, [ref]);
  return contentRect;
}
function Hero({ classes, id }) {
  const refContent = useRef(null);
  const heroHeight = useContentRect(refContent).height + 350;
  const paperHeight = useContentRect(refContent).height + 80;
  return (
    <>
      <section
        id={id}
        className={classes.root}
        style={{ height: heroHeight || 460, padding: 0 }}
      >
        <Paper
          elevation={20}
          className={classes.frozen}
          style={{ height: paperHeight || 300 }}
        >
          <div className={classes.content} ref={refContent}>
            <Fade in timeout={1500}>
              <Typography
                variant="h4"
                gutterBottom
                className={classes.brand}
                align="center"
                inline
              >
                <Sakura width="50px" height="60px" fill="white" />
                Sakura Clinic
              </Typography>
            </Fade>
            <Typography variant="h6" gutterBottom className={classes.desc}>
              Exclusive beauty and health treatments within tranquil, relaxing
              and luxurious surroundings
            </Typography>{" "}
          </div>
        </Paper>
      </section>
    </>
  );
}
export default withStyles(styles)(Hero);
