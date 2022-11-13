import MenuItem from "../types/MenuItem/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MENUS_ITEMS: MenuItem[] = [
  { src: FacebookIcon, color: "white", size: 24 },
  { src: TwitterIcon, color: "white", size: 24 },
  { src: ShoppingCartIcon, color: "white", size: 24 },
  { src: MenuIcon, color: "white", size: 24 },
];

export const PLUG_COLOR = "#D7D7D7";
export const WHITENESS_PLUG_COLOR = "#F5F5F5";
export const WHITE_COLOR = "#fffff";
export const DARK_COLOR = "#282828";
export const YELLOW_COLOR = "#FFE400";
export const BLUE_COLOR = "#2197D7";

interface ItemStyleProps {
  bg?: string;
}

export const Item = styled(Box)<ItemStyleProps>((props) => ({
  background: props.bg || "peru",
  height: 293,
}));
