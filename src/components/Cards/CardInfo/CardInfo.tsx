import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography } from "@mui/material";

type CardInfoProps = {
  header: string;
  text: string;
};

const CardInfo = (props: CardInfoProps) => {
  const { header, text } = props;
  return (
    <>
      <Typography variant={"h4"}>{header}</Typography>
      <HorizontalRuleIcon
        viewBox="0 0 24 24"
        sx={{ fontSize: 80 }}
      ></HorizontalRuleIcon>
      <Typography variant={"subtitle1"}>{text}</Typography>
    </>
  );
};

export default CardInfo;
