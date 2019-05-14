import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { themeSakura } from "./customization/theme";

import Hero from "./components/sectionHero";
import Promise from "./components/sectionPromise";
import Features from "./components/sectionFeatures";
import Team from "./components/sectionTeam";
import TopBar from "./components/topBar";
import Contact from "./components/sectionContact";
import Footer from "./components/footer";

const theme = createMuiTheme(themeSakura);

const menuItems = [
  // { text: "home", id: "hero" },
  { text: "about", id: "promise" },
  { text: "service", id: "features" },
  { text: "team", id: "team" },
  { text: "contact", id: "contact" }
];
const offset = 100;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TopBar menuItems={menuItems} offset={offset} />
        <Hero id="hero" />
        <Promise id="promise" />
        <Features id="features" />
        <Team id="team" />
        <Contact id="contact" />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
