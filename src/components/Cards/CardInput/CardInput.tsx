import { Input, Stack } from "@mui/material";
import React from "react";
import { Item } from "../../../constants";
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
          endAdornment={<SearchIcon></SearchIcon>}
        />
      </Stack>
    </>
  );
};

export default CardInput;
