import LogoDevIcon from "@mui/icons-material/LogoDev";
import React from "react";
import { Item } from "../../constants";

type LogoTypeProps = {
  size: number;
  color: string;
};

const Logo = (props: LogoTypeProps) => {
  const { size, color } = props;
  return (
    <Item>
      <LogoDevIcon sx={{ fontSize: size, color: color }}></LogoDevIcon>
    </Item>
  );
};

export default Logo;
