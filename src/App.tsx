import { ThemeProvider } from "@mui/material";
import React from "react";
import Layout from "./components/Layout/Layout";
import theme from "./contextStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
