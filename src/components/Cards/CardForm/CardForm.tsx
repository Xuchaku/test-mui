import React from "react";
import { Item, WHITE_COLOR } from "../../../constants";
import { Stack, TextField, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button } from "@mui/material";

const CardForm = () => {
  return (
    <>
      <Typography sx={{ color: WHITE_COLOR }} variant={"h4"}>
        SUBSCRIBE
      </Typography>
      <HorizontalRuleIcon
        viewBox="0 0 24 24"
        sx={{ fontSize: 80, color: WHITE_COLOR }}
      ></HorizontalRuleIcon>
      <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
        <TextField
          id="outlined-basic"
          sx={{ mt: 5, width: "100%" }}
          label="E-mail"
          variant="outlined"
        />
        <Button sx={{ color: WHITE_COLOR, mt: 2 }} variant="text">
          SING UP
        </Button>
      </Stack>
    </>
  );
};

export default CardForm;
