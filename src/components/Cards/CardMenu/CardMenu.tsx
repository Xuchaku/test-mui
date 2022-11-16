import React from "react";
import { Stack } from "@mui/material";
import MenuItem from "../../../types/MenuItem/MenuItem";

type MenuPropsType = {
  items: MenuItem[];
};

const CardMenu = (props: MenuPropsType) => {
  const { items } = props;
  return (
    <>
      <Stack
        direction="row"
        sx={{ height: "100%", py: 5 }}
        alignItems={"top"}
        justifyContent={"flex-end"}
        spacing={4}
      >
        {items.map((item) => {
          const SvgIcon = item.src;
          return (
            <SvgIcon sx={{ fontSize: item.size, color: item.color }}></SvgIcon>
          );
        })}
      </Stack>
    </>
  );
};

export default CardMenu;
