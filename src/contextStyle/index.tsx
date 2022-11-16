import { createTheme } from "@mui/material";
import { BLUE_COLOR, DARK_COLOR, GRAY_COLOR, WHITE_COLOR } from "../constants";
import Rubik from "./../assets/fonts/Rubik-Regular.ttf";

let theme = createTheme({
  typography: {
    fontFamily: "Rubik",
    h3: {
      color: DARK_COLOR,
    },
    h4: {
      color: DARK_COLOR,
    },
    h6: { color: DARK_COLOR },
    subtitle1: {
      color: DARK_COLOR,
    },
    body2: {
      color: GRAY_COLOR,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        src: local('Rubik'), local('Rubik-Regular'), url(${Rubik}) format('woff2');
      }
    `,
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: `2px solid ${WHITE_COLOR}`,
          },
          "&:after": {
            borderBottom: `2px solid ${WHITE_COLOR}`,
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `2px solid ${WHITE_COLOR}`,
          },
        },
        root: {
          color: WHITE_COLOR,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: BLUE_COLOR,
          backgroundColor: WHITE_COLOR,
        },
      },
    },
  },
});
export default theme;
