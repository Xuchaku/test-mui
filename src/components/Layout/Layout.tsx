import { Grid } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Main from "../Main/Main";
import MainFeatures from "../MainFeatures/MainFeatures";

const Layout = () => {
  console.log("lay");
  return (
    <Grid container xs={12}>
      <Head></Head>
      <Main></Main>
      <MainFeatures></MainFeatures>
    </Grid>
  );
};

export default Layout;
