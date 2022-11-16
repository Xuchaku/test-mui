import { createTheme } from "@mui/material";
import {
  BLUE_COLOR,
  DARK_COLOR,
  GRAY_COLOR,
  PLUG_COLOR,
  WHITE_COLOR,
} from "../constants";

let theme = createTheme({
  typography: {
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
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
export default theme;
