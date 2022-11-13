import { Stack } from "@mui/material";
import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Item } from "../../constants";

const CardMinor = () => {
  return (
    <Item sx={{ py: 3, px: 2 }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <PlayCircleFilledIcon sx={{ fontSize: 80 }}></PlayCircleFilledIcon>
        <span>asdf</span>
      </Stack>
    </Item>
  );
};

export default CardMinor;
