import LogoDevIcon from "@mui/icons-material/LogoDev";
import React from "react";
import { Item } from "../../../constants";
import { DARK_COLOR } from "./../../../constants/index";

type LogoTypeProps = {
  size: number;
  color: string;
};

const CardLogo = (props: LogoTypeProps) => {
  const { size, color } = props;
  return <LogoDevIcon sx={{ fontSize: size, color }}></LogoDevIcon>;
};

export default CardLogo;
