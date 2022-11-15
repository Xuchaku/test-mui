import { Stack, SvgIconTypeMap } from "@mui/material";
import React from "react";
import { Item } from "../../../constants";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type CardMinorPropsType = {
  text: string;
  src: OverridableComponent<SvgIconTypeMap>;
};

const CardMinor = (props: CardMinorPropsType) => {
  const { text, src: SvgElem } = props;
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <SvgElem sx={{ fontSize: 80 }}></SvgElem>
        <span>{text}</span>
      </Stack>
    </>
  );
};

export default CardMinor;
