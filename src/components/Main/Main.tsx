import React from "react";
import { Grid } from "@mui/material";
import { Item, PLUG_COLOR, WHITE_COLOR, YELLOW_COLOR } from "../../constants";

const Main = () => {
  return (
    <>
      <Grid item xs={6}>
        <Item bg={YELLOW_COLOR}></Item>
      </Grid>
      <Grid item xs={3}>
        <Item bg={PLUG_COLOR}></Item>
      </Grid>
      <Grid item xs={3}>
        <Item bg={WHITE_COLOR}></Item>
      </Grid>
    </>
  );
};

export default Main;
