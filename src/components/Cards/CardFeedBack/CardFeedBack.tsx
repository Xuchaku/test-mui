import React from "react";
import { Rating, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { DARK_COLOR } from "../../../constants";

type CardFeedBackPropsType = {
  value: number;
  header: string;
  text: string;
  bg: string;
};

const CardFeedBack = (props: CardFeedBackPropsType) => {
  const { value, header, text } = props;
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Box sx={{ width: 50, height: 50, background: DARK_COLOR }}></Box>
        <Typography variant={"h5"}>{header}</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography align={"center"} variant={"body2"}>
          {text}
        </Typography>
      </Stack>
    </>
  );
};

export default CardFeedBack;
