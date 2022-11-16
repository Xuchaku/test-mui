import React from "react";
import { RadioGroup, Rating, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { DARK_COLOR, RadioCustom } from "../../../constants";
import Variant from "../../../types/Variant/Variant";

type CardFeedBackPropsType = {
  value: number;
  header: string;
  text: string;
  bg: string;
  isRadio: boolean;
  variants: Variant[];
};

const CardFeedBack = (props: CardFeedBackPropsType) => {
  const { value, header, text, isRadio, variants } = props;
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
        {isRadio && variants && (
          <RadioGroup defaultValue={variants[0]} sx={{ mt: 6 }}>
            <Stack direction={"row"} justifyContent={"flex-start"}>
              {variants.map((variant) => {
                return (
                  <RadioCustom
                    colorCustom={DARK_COLOR}
                    value={variant}
                    name="radio-buttons"
                  />
                );
              })}
            </Stack>
          </RadioGroup>
        )}
      </Stack>
    </>
  );
};

export default CardFeedBack;
