import React from "react";
import { PLUG_COLOR, WHITE_COLOR } from "../../../constants";
import { Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { format } from "fecha";
import { RadioCustom } from "./../../../constants/index";
import Variant from "../../../types/Variant/Variant";

type CardNewsPropsType = {
  date: Date;
  header: string;
  comments: number;
  variants: Variant[];
};

const CardNews = (props: CardNewsPropsType) => {
  const { date, header, comments, variants } = props;
  return (
    <>
      <Typography sx={{ color: WHITE_COLOR, mb: 4 }} variant={"h4"}>
        NEWS
      </Typography>
      <Typography sx={{ color: PLUG_COLOR }} variant={"body2"}>
        {format(date, "D MMMM, YYYY")}
      </Typography>
      <Typography sx={{ color: WHITE_COLOR, mb: 4 }} variant={"h5"}>
        {header}
      </Typography>
      <Typography sx={{ color: PLUG_COLOR }} variant={"body2"}>
        {comments} comments
      </Typography>
      <RadioGroup defaultValue={variants[0]} sx={{ mt: 6 }}>
        <Stack direction={"row"} justifyContent={"flex-start"}>
          {variants.map((variant) => {
            return (
              <RadioCustom
                colorCustom={WHITE_COLOR}
                value={variant}
                name="radio-buttons"
              />
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default CardNews;
