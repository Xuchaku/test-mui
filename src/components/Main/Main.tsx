import React from "react";
import { Grid } from "@mui/material";
import {
  CONTENT_SECTION_FIRST,
  Item,
  PLUG_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../constants";

const Main = () => {
  return (
    <>
      {CONTENT_SECTION_FIRST.map((item) => {
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

export default Main;
