import React from "react";
import { Item } from "../../../constants";
import { TextField, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button } from "@mui/material";

const CardForm = () => {
  return (
    <>
      <Typography variant={"h4"}>SUBSCRIBE</Typography>
      <HorizontalRuleIcon
        viewBox="0 0 24 24"
        sx={{ fontSize: 80 }}
      ></HorizontalRuleIcon>
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      <Button sx={{ marginLeft: "20px" }} variant="text">
        SING UP
      </Button>
    </>
  );
};

export default CardForm;
