import React from "react";
import { Grid } from "@mui/material";
import { Item, HEAD_ITEMS } from "../../constants";
import { renderCards } from "../../utils";

const Head = () => {
  return <>{renderCards(HEAD_ITEMS)}</>;
};

export default Head;
