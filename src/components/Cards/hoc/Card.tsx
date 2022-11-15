import React, { ReactNode } from "react";
import { Item } from "../../../constants";

type CardProps = {
  styles: any;
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return <Item sx={props.styles}>{props.children}</Item>;
};

export default Card;
