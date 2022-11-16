import React from "react";
import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { DARK_COLOR, WHITE_COLOR } from "../../../constants";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type CardMinorPropsType = {
  text: string;
  src: OverridableComponent<SvgIconTypeMap>;
  darkText: boolean;
};

const CardMinor = (props: CardMinorPropsType) => {
  const { text, src: SvgElem, darkText } = props;
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <SvgElem sx={{ fontSize: 80, color: DARK_COLOR }}></SvgElem>
        <Typography
          sx={{ color: darkText ? DARK_COLOR : WHITE_COLOR }}
          variant={"body1"}
        >
          {text}
        </Typography>
      </Stack>
    </>
  );
};

export default CardMinor;
