import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { FC } from "react";

type LogoPropsType = {
  src: OverridableComponent<SvgIconTypeMap>;
  size: number;
  color: string;
};

const Logo: FC<LogoPropsType> = ({ src: Logo, size, color }) => {
  return <Logo sx={{ fontSize: size, color }} />;
};

export default Logo;
