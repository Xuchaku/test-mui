import { Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import React from "react";
import Box from "@mui/material/Box";
import { Item } from "../../constants";

type CardSliderPropsType = {
  startNum: number;
  endNum: number;
};

const CardSlider = (props: CardSliderPropsType) => {
  const { startNum, endNum } = props;
  return (
    <Item sx={{ py: 3, px: 2 }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <ArrowLeftIcon sx={{ fontSize: 80 }}></ArrowLeftIcon>
        <Stack direction={"row"}>
          <Typography variant="h4">{startNum}</Typography>
          <Typography>/{endNum}</Typography>
        </Stack>
        <ArrowRightIcon sx={{ fontSize: 80 }}></ArrowRightIcon>
      </Stack>
    </Item>
  );
};

export default CardSlider;
