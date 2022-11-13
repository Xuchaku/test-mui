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
import CardSubmit from "../components/CardSubmit/CardSubmit";
import CardSlider from "../components/CardSlider/CardSlider";
import CardMinor from "../components/CardMinor/CardMinor";
import CardInfo from "../components/CardInfo/CardInfo";

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
  height: 293,
  background: props.bg || "peru",
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

export const CONTENT_SECTION_FIRST: GridItem[] = [
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: YELLOW_COLOR,
    size: { xs: 4 },
    propsChildren: {
      header: "BULDINT THE WORLD AROUND US",
      text: "Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.",
      buttonText: "READ MORE",
    },
    children: CardSubmit,
  },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardSlider,
    propsChildren: {
      startNum: 1,
      endNum: 3,
    },
  },
  { type: "plug", bg: DARK_COLOR, size: { xs: 2 }, children: null },

  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  { type: "plug", bg: BLUE_COLOR, size: { xs: 2 }, children: CardMinor },
  { type: "plug", bg: DARK_COLOR, size: { xs: 2 }, children: null },
  { type: "plug", bg: DARK_COLOR, size: { xs: 2 }, children: null },
];

export const CONTENT_SECTION_MAIN: GridItem[] = [
  { type: "plug", bg: WHITENESS_PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "OUR SERVICES",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "General Contracting",
      text: "The oil company Shell invented a new 'matching-half' promotion called 'Make Money*. Each time people bought a Shell product they were given half of a bank note. If they got the other half of the note they could get the money for the two halves.",
    },
  },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  { type: "plug", bg: WHITENESS_PLUG_COLOR, size: { xs: 2 }, children: null },

  { type: "plug", bg: WHITENESS_PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardSlider,
    propsChildren: {
      startNum: 3,
      endNum: 6,
    },
  },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "Project design and engeneering",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction. The oil company Shell invented a new.",
    },
  },
  { type: "plug", bg: PLUG_COLOR, size: { xs: 2 }, children: null },
  {
    type: "content",
    bg: WHITE_COLOR,
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "Capital impovements",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  { type: "plug", bg: WHITENESS_PLUG_COLOR, size: { xs: 2 }, children: null },
];
