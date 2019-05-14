import React, { useState } from "react";
import {
  withStyles,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import bg from "../images/interior.jpg";

const styles = theme => ({
  root: {
    padding: "0 48px",
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
  },
  formContainer: {
    position: "relative",
    width: "80%",
    marginLeft: "20%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    padding: "32px 0",
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: theme.palette.tint,
      opacity: 0.3,
    },
  },
  frozen: {
    position: "absolute",
    top: 60,
    width: "80%",
    maxWidth: 450,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    left: "-20%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    border: "3px solid #fff",
    overflow: "hidden",
    zIndex: 1,

    "&::before": {
      zIndex: 2,
      content: '""',
      background: "inherit",
      position: "absolute",
      left: -10,
      right: -10,
      top: -10,
      bottom: -10,
      filter: "blur(2px)",
      boxShadow: `inset 0 0 0 300px ${theme.palette.tone}aa `,
    },
  },
  content: {
    position: "absolute",
    zIndex: 10,
    padding: 32,
    margin: "18px auto",
    textAlign: "center",
    minHeight: 300,
    color: "white",
  },
  title: {
    padding: "0 0 32px 0",
  },
  intro: {
    padding: 48,
    [theme.breakpoints.down("xs")]: {
      padding: 16,
    },
  },
  btnCTA: {
    backgroundImage: `linear-gradient(-135deg, ${
      theme.palette.secondary.main
    }, ${theme.palette.primary.main})`,
    width: 150,
    color: "white",
    boxShadow: `0 7px 13px -2px ${theme.palette.secondary.main}80,${
      theme.shadows[20]
    }`,
    margin: "32px auto",
    display: "block",
  },
  titleDialog: {
    margin: "32px auto",
  },
});
const Contact = ({ classes, id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setOpenModal(true);
  };
  const handleDialogClose = () => {
    setOpenModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id={id}>
      <Typography variant="h2" color="primary" className={classes.title}>
        We’re always happy to answer any questions you may have about our
        services.
      </Typography>

      <Grid
        container
        className={classes.root}
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <div className={classes.intro}>
            <Typography gutterBottom>
              Enter your details in our contact form and we will respond as soon
              as we can.
            </Typography>
            <Typography gutterBottom>
              If you would like to speak with someone <strong>directly</strong>,
              we’re more than happy to have a chat to answer any inquiry you may
              have. Please call us to get in touch.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={18}
            className={classes.formContainer}
            style={{ height: 380 }}
          >
            <Paper
              className={classes.frozen}
              style={{ height: 490 }}
              elevation={23}
            >
              <div className={classes.content}>
                <Typography
                  variant="h5"
                  className={classes.title}
                  style={{ color: "white", fontSize: 22 }}
                >
                  We want to hear from you!
                </Typography>

                {/* <Sakura fill="#fff" width="32px" height="42px" /> */}
                <form onSubmit={handleSubmit}>
                  <TextField
                    margin="dense"
                    variant="filled"
                    label="Your name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    variant="filled"
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                  <TextField
                    margin="dense"
                    variant="filled"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    type="textarea"
                    multiline
                    rowsMax="4"
                    rows="4"
                    margin="dense"
                    variant="filled"
                    label="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.btnCTA}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={openModal} onClose={handleDialogClose}>
        <Typography
          variant="h5"
          color="primary"
          className={classes.titleDialog}
        >
          Thank You {name}!
        </Typography>
        <DialogContent>
          <DialogContentText>
            We will call you within 30 minutes by number {phone} and send a
            confirmation email to {email}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};
export default withStyles(styles)(Contact);
