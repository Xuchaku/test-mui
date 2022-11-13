import React from "react";
import { Grid } from "@mui/material";
import Logo from "../Logo/Logo";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Menu from "../Menu/Menu";
import { MENUS_ITEMS, Item, DARK_COLOR, PLUG_COLOR } from "../../constants";

const Head = () => {
  return (
    <>
      <Grid item xs={9}>
        <Item bg={PLUG_COLOR}>
          <Logo src={LogoDevIcon} size={120} color={"#282828"}></Logo>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item bg={DARK_COLOR}>
          <Menu items={MENUS_ITEMS} />
        </Item>
      </Grid>
    </>
  );
};

export default Head;
