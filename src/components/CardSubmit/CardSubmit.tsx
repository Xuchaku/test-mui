import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { DARK_COLOR, Item } from "../../constants";
type CardSubmitProps = {
  header: string;
  text: string;
  buttonText: string;
};

const CardSubmit = (props: CardSubmitProps) => {
  const { header, text, buttonText } = props;
  return (
    <Item sx={{ py: 3, px: 2 }}>
      <Typography variant={"h4"}>{header}</Typography>
      <HorizontalRuleIcon sx={{ fontSize: 80 }}></HorizontalRuleIcon>
      <Typography variant={"subtitle1"}>{text}</Typography>
      <Button sx={{ borderRadius: 0 }} variant="contained">
        {buttonText}
      </Button>
    </Item>
  );
};

export default CardSubmit;
