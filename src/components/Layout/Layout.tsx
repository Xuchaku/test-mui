import React from "react";
import { Grid } from "@mui/material";
import Head from "../Head/Head";
import Main from "../Main/Main";

const Layout = () => {
  console.log("lay");
  return (
    <Grid alignItems={"stretch"} container xs={12}>
      <Head></Head>
      <Main></Main>
    </Grid>
  );
};

export default Layout;
