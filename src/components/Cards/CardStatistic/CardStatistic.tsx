import React from "react";
import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { BLUE_COLOR, YELLOW_COLOR } from "../../../constants";

type CardStatisticPropsType = {
  text: string;
  src: OverridableComponent<SvgIconTypeMap>;
  value: number;
};

const CardStatistic = (props: CardStatisticPropsType) => {
  const { text, src: ElemSvg, value } = props;
  return (
    <>
      <Box sx={{ background: YELLOW_COLOR, p: 2, width: 100 }}>
        <ElemSvg sx={{ fontSize: 60, color: BLUE_COLOR }}></ElemSvg>
      </Box>
      <Typography variant={"h3"} sx={{ mt: 5 }}>
        {value}
      </Typography>
      <Typography variant={"body2"}>{text}</Typography>
    </>
  );
};

export default CardStatistic;
