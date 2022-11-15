import MenuItem from "../types/MenuItem/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import OpacityIcon from "@mui/icons-material/Opacity";
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MenuIcon from "@mui/icons-material/Menu";
import BoltIcon from "@mui/icons-material/Bolt";
import { Box } from "@mui/material";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import { styled } from "@mui/material/styles";
import CardLogo from "../components/Cards/CardLogo/CardLogo";
import CardMenu from "../components/Cards/CardMenu/CardMenu";
import GridItem from "../types/GridItem/GridItem";
import CardSubmit from "../components/Cards/CardSubmit/CardSubmit";
import CardSlider from "../components/Cards/CardSlider/CardSlider";
import CardMinor from "../components/Cards/CardMinor/CardMinor";
import CardInfo from "../components/Cards/CardInfo/CardInfo";
import CardInput from "../components/Cards/CardInput/CardInput";
import CardFeedBack from "../components/Cards/CardFeedBack/CardFeedBack";
import CardStatistic from "../components/Cards/CardStatistic/CardStatistic";
import CardNews from "../components/Cards/CardNews/CardNews";
import CardForm from "../components/Cards/CardForm/CardForm";

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
  styles?: { [key: string]: string };
  height?: number;
}

export const Item = styled(Box)<ItemStyleProps>((props) => ({
  height: "100%",
  minHeight: 293,
  //   height: "100%",
  //   height: "auto",
  // background: props.styles.backgroundColor || "peru",
}));

export const HEAD_ITEMS: GridItem[] = [
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 6 },
    children: CardLogo,
    propsChildren: {
      size: 120,
      color: DARK_COLOR,
    },
  },
  {
    type: "content",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardMenu,
    propsChildren: {
      items: MENUS_ITEMS,
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
];

export const CONTENT_SECTION_MAIN: GridItem[] = [
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: YELLOW_COLOR, py: 3, px: 2 },
    size: { xs: 4 },
    propsChildren: {
      header: "BULDINT THE WORLD AROUND US",
      text: "Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.",
      buttonText: "READ MORE",
    },
    children: CardSubmit,
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardSlider,
    propsChildren: {
      startNum: 1,
      endNum: 3,
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },

  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: BLUE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardMinor,
    propsChildren: { text: "COMPANY VIDEO", src: PlayCircleFilledIcon },
  },
  {
    type: "plug",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "OUR SERVICES",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "General Contracting",
      text: "The oil company Shell invented a new 'matching-half' promotion called 'Make Money*. Each time people bought a Shell product they were given half of a bank note. If they got the other half of the note they could get the money for the two halves.",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },

  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardSlider,
    propsChildren: {
      startNum: 3,
      endNum: 6,
    },
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "Project design and engeneering",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction. The oil company Shell invented a new.",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardInfo,
    propsChildren: {
      header: "Capital impovements",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },

  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: YELLOW_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardMinor,
    propsChildren: {
      text: "DOWNLOAD PRICE",
      src: PictureAsPdfIcon,
    },
  },
  {
    type: "content",
    styles: { backgroundColor: BLUE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardMinor,
    propsChildren: {
      text: "CONTACT US",
      src: MyLocationIcon,
    },
  },
  {
    type: "content",
    styles: { backgroundColor: DARK_COLOR, py: 3, px: 2 },
    size: { xs: 6 },
    children: CardInput,
    propsChildren: {
      text: "CONTACT US",
      src: MyLocationIcon,
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 4 },
    children: CardFeedBack,
    propsChildren: {
      value: 5,
      header: "Martin H.Jhonsons",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  {
    type: "content",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 4 },
    propsChildren: {
      header: "YOUR BUILDING IS IN GOOD HANDS",
      text: "Still other clients have reserved for capital improvement projects and will work directly with our Design. Our mission is to provide the highest level.",
      buttonText: "ABOUT COMPANY",
    },
    children: CardSubmit,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 4 },
    children: CardFeedBack,
    propsChildren: {
      value: 5,
      header: "Tony SH. SHultz",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through construction.Our mission is to provide the highest level of service for our client-partners from concept through construction.",
    },
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardStatistic,
    propsChildren: {
      src: BoltIcon,
      value: 55000,
      text: "Expert Witness",
    },
  },
  {
    type: "content",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardStatistic,
    propsChildren: {
      src: OpacityIcon,
      value: 124600,
      text: "Construction",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: BLUE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardNews,
    propsChildren: {
      date: new Date(),
      header: "Projetc Design and Engeneering Services",
      comments: 23,
    },
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardFeedBack,
    propsChildren: {
      value: 5,
      header: "David Mc. Adams",
      text: "Our mission is to provide the highest level of service for our client-partners from concept through components. Of service for our client-partners from concept through components.",
    },
  },
  {
    type: "content",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardStatistic,
    propsChildren: {
      src: SettingsIcon,
      value: 18000,
      text: "Procurement",
    },
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardStatistic,
    propsChildren: {
      src: LightbulbIcon,
      value: 78150,
      text: "Project Managments",
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
];

export const CONTENT_SECTION_LAST: GridItem[] = [
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    propsChildren: {
      header: "Contemporary Villa",
      text: "Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.",
      buttonText: "VIEW PROJECT",
    },
    children: CardSubmit,
  },

  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "plug",
    styles: { backgroundColor: PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: WHITE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardSlider,
    propsChildren: {
      startNum: 1,
      endNum: 9,
    },
  },

  {
    type: "content",
    styles: { backgroundColor: BLUE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardMinor,
    propsChildren: {
      text: "WORK WITH US",
      src: SettingsInputCompositeIcon,
    },
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
  {
    type: "content",
    styles: { backgroundColor: BLUE_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: CardForm,
  },
  {
    type: "plug",
    styles: { backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2 },
    size: { xs: 2 },
    children: null,
  },
];

// export const CONTENT_SECTION_MAIN: GridItem[] = [

// ];

// export const CONTENT_SECTION_MAIN_TWO: GridItem[] = [
//   { type: "plug", styles: {backgroundColor: WHITENESS_PLUG_COLOR, py: 3, px: 2}, size: { xs: 2 }, children: null },
//   {
//     type: "content",
//     styles: {backgroundColor: YELLOW_COLOR, py: 3, px: 2},
//     size: { xs: 2 },
//     children: CardMinor,
//     propsChildren: {
//       text: "DOWNLOAD PRICE",
//       src: PictureAsPdfIcon,
//     },
//   },
//   {
//     type: "content",
//     styles: {backgroundColor: BLUE_COLOR, py: 3, px: 2},
//     size: { xs: 2 },
//     children: CardMinor,
//     propsChildren: {
//       text: "CONTACT US",
//       src: MyLocationIcon,
//     },
//   },
// ];
