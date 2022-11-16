import React from "react";
import { Typography } from "@mui/material";
import { TypographyAfterSvg } from "../../../constants";
type CardInfoProps = {
  header: string;
  text: string;
};

const CardInfo = (props: CardInfoProps) => {
  const { header, text } = props;
  return (
    <>
      <Typography variant={"h4"}>{header}</Typography>
      <TypographyAfterSvg variant={"subtitle1"}>{text}</TypographyAfterSvg>
    </>
  );
};

export default CardInfo;
