import React from "react";
import { Grid } from "@mui/material";
import { CONTENT_SECTION_LAST, CONTENT_SECTION_MAIN } from "../../constants";
import { renderCards } from "../../utils";

const Main = () => {
  const firstSection2 = CONTENT_SECTION_LAST.slice(0, 2);
  const firstSection = CONTENT_SECTION_LAST.slice(2, 3);
  const secondSection = CONTENT_SECTION_LAST.slice(3);
  console.log(firstSection2);
  return (
    <>
      {renderCards(CONTENT_SECTION_MAIN)}
      <Grid container item xl={2}>
        {renderCards(firstSection2, 2)}
      </Grid>
      <Grid container item xl={2}>
        {renderCards(firstSection, 2)}
      </Grid>
      <Grid container item xl={8}>
        {renderCards(secondSection, 8)}
      </Grid>
    </>
  );
};

export default Main;
