import { Grid } from "@mui/material";
import React from "react";
import { CONTENT_SECTION_MAIN, Item } from "../../constants";

const MainFeatures = () => {
  return (
    <>
      {CONTENT_SECTION_MAIN.map((item) => {
        const CurrentElement = item.children;
        const currentProps = item.propsChildren;
        return (
          <Grid item {...item.size}>
            {CurrentElement ? (
              <CurrentElement {...currentProps}></CurrentElement>
            ) : (
              <Item bg={item.bg}></Item>
            )}
          </Grid>
        );
      })}
    </>
  );
};

export default MainFeatures;
