import React from "react";
import { Grid } from "@mui/material";
import { Item, HEAD_ITEMS } from "../../constants";

const Head = () => {
  return (
    <>
      {HEAD_ITEMS.map((item) => {
        const CurrentElement = item.children;
        const currentProps = item.propsChildren;
        return (
          <Grid item {...item.size}>
            <Item bg={item.bg}>
              {CurrentElement ? (
                <CurrentElement {...currentProps}></CurrentElement>
              ) : null}
            </Item>
          </Grid>
        );
      })}
    </>
  );
};

export default Head;
