import React from "react";
import { Item } from "../../../constants";
import { Typography } from "@mui/material";

type CardNewsPropsType = {
  date: Date;
  header: string;
  comments: number;
};

const CardNews = (props: CardNewsPropsType) => {
  const { date, header, comments } = props;
  return (
    <>
      <Typography variant={"h4"}>NEWS</Typography>
      <Typography variant={"body2"}>{date.toString()}</Typography>
      <Typography variant={"h4"}>{header}</Typography>
      <Typography variant={"body2"}>{comments} comments</Typography>
    </>
  );
};

export default CardNews;
