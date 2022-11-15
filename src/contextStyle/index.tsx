import { createTheme } from "@mui/material";
import { DARK_COLOR } from "../constants";

// declare module '@mui/material/styles' {
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }
let theme = createTheme({
  palette: {
    primary: {
      main: DARK_COLOR,
    },
    // secondary: {
    //   light: "#ff0000",
    //   main: "#ff0000",
    //   dark: "#ff0000",
    // },
  },
  typography: {
    h4: {
      color: DARK_COLOR,
    },
    body2: {
      color: DARK_COLOR,
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: DARK_COLOR,
        },
      },
    },
  },
});
export default theme;
