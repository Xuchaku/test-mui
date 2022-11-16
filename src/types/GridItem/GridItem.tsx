type GridItem = {
  type: "plug" | "content";
  styles: { [key: string]: string | number };
  size: { [key: string]: number };
  children: null | ((props: any) => JSX.Element);
  propsChildren?: any;
};
export default GridItem;
