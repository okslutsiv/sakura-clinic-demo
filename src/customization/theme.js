import { primary, secondary, tones, shades, tints } from "./colors";
import shadows from "./shadows";

export const themeSakura = {
  palette: {
    primary: {
      main: primary[500]
    },
    secondary: {
      main: secondary[500]
    },
    shade: shades[500],
    tint: tints[500],
    tone: tones[500],
    text: {
      primary: tones[900],
      secondary: tones[700]
    }
  },
  shadows,
  shape: {
    borderRadius: 8
  },
  typography: {
    useNextVariants: true,
    h2: {
      fontFamily: "'Ruthie', cursive",
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: 1,
      margin: "16px 0"
    },
    h5: {
      fontFamily: "'Ruthie', cursive",
      fontSize: 36,
      lineHeight: 1,
      letterSpacing: 1
    },
    h6: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 400,
      letterSpacing: 1
    },
    subtitle1: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 500,
      letterSpacing: 0.5
    },
    body1: {
      fontFamily: `'Open Sans', sans-serif`,
      fontWeight: 400,
      letterSpacing: 0.5
    }
  },
  overrides: {
    MuiFormControl: {
      root: {}
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "rgba(255,255,255,0.5)",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.7)"
        },
        "&$focused": {
          backgroundColor: "rgba(255,255,255,0.7)"
        },
        "&$multiline": {
          padding: "27px 22px 10px"
        }
      }
    }
  }
};
