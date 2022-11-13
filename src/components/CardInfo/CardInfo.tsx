import React from "react";
import { Item } from "../../constants";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography } from "@mui/material";

type CardInfoProps = {
  header: string;
  text: string;
};

const CardInfo = (props: CardInfoProps) => {
  const { header, text } = props;
  return (
    <Item sx={{ py: 3, px: 2 }}>
      <Typography variant={"h4"}>{header}</Typography>
      <HorizontalRuleIcon
        viewBox="0 0 24 24"
        sx={{ fontSize: 80 }}
      ></HorizontalRuleIcon>
      <Typography variant={"subtitle1"}>{text}</Typography>
    </Item>
  );
};

export default CardInfo;
