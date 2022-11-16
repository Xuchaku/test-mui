import React from "react";
import { Button, Typography } from "@mui/material";
import {
  DARK_COLOR,
  TypographyAfterSvg,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../../constants";
type CardSubmitProps = {
  header: string;
  text: string;
  buttonText: string;
  buttonBackground: string;
};

const CardSubmit = (props: CardSubmitProps) => {
  const { header, text, buttonText, buttonBackground } = props;
  return (
    <>
      <Typography sx={{ width: "60%" }} variant={"h4"}>
        {header}
      </Typography>
      <TypographyAfterSvg variant={"subtitle1"}>{text}</TypographyAfterSvg>
      <Button
        sx={{
          borderRadius: 0,
          mt: 4,
          px: 3,
          py: 2,
          background: buttonBackground,
          color: buttonBackground == YELLOW_COLOR ? DARK_COLOR : WHITE_COLOR,
        }}
        variant="contained"
      >
        {buttonText}
      </Button>
    </>
  );
};

export default CardSubmit;
