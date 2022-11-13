import { Grid } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container item xs={8}>
        <Head />
        <Main />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
