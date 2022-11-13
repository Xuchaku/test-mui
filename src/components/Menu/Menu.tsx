import { Stack } from "@mui/material";
import React from "react";
import { Item } from "../../constants";
import MenuItem from "../../types/MenuItem/MenuItem";

type MenuPropsType = {
  items: MenuItem[];
};

const Menu = (props: MenuPropsType) => {
  const { items } = props;
  return (
    <Item>
      <Stack direction="row" spacing={2}>
        {items.map((item) => {
          const SvgIcon = item.src;
          return (
            <SvgIcon sx={{ fontSize: item.size, color: item.color }}></SvgIcon>
          );
        })}
      </Stack>
    </Item>
  );
};

export default Menu;
