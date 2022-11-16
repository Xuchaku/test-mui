import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type CardSliderPropsType = {
  startNum: number;
  endNum: number;
};

const CardSlider = (props: CardSliderPropsType) => {
  const { startNum, endNum } = props;
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <ArrowLeftIcon sx={{ fontSize: 80 }}></ArrowLeftIcon>
        <Stack direction={"row"}>
          <Typography variant="h3">0{startNum}</Typography>
          <Typography variant="h6">/0{endNum}</Typography>
        </Stack>
        <ArrowRightIcon sx={{ fontSize: 80 }}></ArrowRightIcon>
      </Stack>
    </>
  );
};

export default CardSlider;
