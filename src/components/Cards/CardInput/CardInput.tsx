import React from "react";
import { Input, Stack } from "@mui/material";
import { WHITE_COLOR } from "../../../constants";
import SearchIcon from "@mui/icons-material/Search";

const CardInput = () => {
  return (
    <>
      <Stack
        alignItems={"start"}
        justifyContent={"center"}
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Input
          sx={{ py: 1, px: 2, width: "60%" }}
          defaultValue=""
          placeholder="What you're looking for"
          endAdornment={<SearchIcon sx={{ color: WHITE_COLOR }}></SearchIcon>}
        />
      </Stack>
    </>
  );
};

export default CardInput;
