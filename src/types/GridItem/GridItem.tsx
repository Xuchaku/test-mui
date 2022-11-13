import { FunctionComponent, ReactElement } from "react";
type GridItem = {
  type: "plug" | "content";
  bg: string;
  size: { xs: number };
  children: null | ((props: any) => JSX.Element);
  propsChildren?: any;
};
export default GridItem;
