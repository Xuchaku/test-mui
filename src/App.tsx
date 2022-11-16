import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Layout from "./components/Layout/Layout";
import theme from "./contextStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
