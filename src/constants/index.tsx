import MenuItem from "../types/MenuItem/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";
import GridItem from "../types/GridItem/GridItem";

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

export const HEAD_ITEMS: GridItem[] = [
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: PLUG_COLOR,
    size: { xs: 6 },
    children: Logo,
    propsChildren: {
      size: 120,
      color: DARK_COLOR,
    },
  },
  {
    type: "content",
    bg: DARK_COLOR,
    size: { xs: 2 },
    children: Menu,
    propsChildren: {
      items: MENUS_ITEMS,
    },
  },
  { type: "plug", bg: DARK_COLOR, size: { xs: 2 }, children: null },
];

// export const CONTENT_SECTION_FIRST: GridItem[] = [
//   { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
//   {
//     type: "content",
//     bg: YELLOW_COLOR,
//     size: { xs: 4 },
//     propsChildren: {
//       header: "BULDINT THE WORLD AROUND US",
//       text: "Still other clients have",
//       buttonText: "Read More",
//     },
//     children: <Logo />,
//   },
//   { type: "content", bg: DARK_COLOR, size: { xs: 2 }, children: <Menu /> },
//   { type: "plug", bg: DARK_COLOR, size: { xs: 2 }, children: null },
// ];
