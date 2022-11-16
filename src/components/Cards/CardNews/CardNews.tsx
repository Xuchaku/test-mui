import React from "react";
import { PLUG_COLOR, WHITE_COLOR } from "../../../constants";
import { Typography } from "@mui/material";
import { format } from "fecha";

type CardNewsPropsType = {
  date: Date;
  header: string;
  comments: number;
};

const CardNews = (props: CardNewsPropsType) => {
  const { date, header, comments } = props;
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
    </>
  );
};

export default CardNews;
