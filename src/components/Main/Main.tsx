import React from "react";
import { Grid } from "@mui/material";
import {
  CONTENT_SECTION_LAST,
  CONTENT_SECTION_MAIN,
  Item,
  PLUG_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../constants";
import { renderCards } from "../../utils";

const Main = () => {
  const gridWidth = 4;
  const firstSection2 = CONTENT_SECTION_LAST.slice(0, 2);
  const firstSection = CONTENT_SECTION_LAST.slice(2, 3);
  const secondSection = CONTENT_SECTION_LAST.slice(3, 7);
  const lastSection = CONTENT_SECTION_LAST.slice(7);
  return (
    <>
      {renderCards(CONTENT_SECTION_MAIN)}
      <Grid container item xs={2}>
        {renderCards(firstSection2, 2)}
      </Grid>
      <Grid container item xs={2}>
        {renderCards(firstSection, 2)}
      </Grid>
      <Grid container item xs={4}>
        {renderCards(secondSection, 4)}
      </Grid>
      <Grid container item xs={4}>
        {renderCards(lastSection, 4)}
      </Grid>
    </>
  );
};

export default Main;
