import LogoDevIcon from "@mui/icons-material/LogoDev";
import React from "react";

type LogoTypeProps = {
  size: number;
  color: string;
};

const Logo = (props: LogoTypeProps) => {
  const { size, color } = props;
  return <LogoDevIcon sx={{ fontSize: size, color: color }}></LogoDevIcon>;
};

export default Logo;
