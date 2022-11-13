import { Stack } from "@mui/material";
import React from "react";
import MenuItem from "../../types/MenuItem/MenuItem";

type MenuPropsType = {
  items: MenuItem[];
};

const Menu = (props: MenuPropsType) => {
  const { items } = props;
  return (
    <Stack direction="row" spacing={2}>
      {items.map((item) => {
        const SvgIcon = item.src;
        return (
          <SvgIcon sx={{ fontSize: item.size, color: item.color }}></SvgIcon>
        );
      })}
    </Stack>
  );
};

export default Menu;
