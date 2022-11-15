import { Grid } from "@mui/material";
import Card from "../components/Cards/hoc/Card";
import { Item } from "../constants";
import GridItem from "../types/GridItem/GridItem";

export const multiplySize = (obj: { [key: string]: number }, mult: number) => {
  const multipyObj: { [key: string]: number } = {};
  for (let key in obj) {
    multipyObj[key] = mult * obj[key];
  }
  return multipyObj;
};

export const renderCards = (section: GridItem[], sizeContainer?: number) => {
  return section.map((item) => {
    const CurrentElement = item.children;
    const currentProps = item.propsChildren;
    const sizing = sizeContainer
      ? multiplySize(item.size, 12 / sizeContainer)
      : item.size;
    return (
      <Grid item {...sizing}>
        {CurrentElement ? (
          <Card styles={item.styles}>
            <CurrentElement {...currentProps}></CurrentElement>
          </Card>
        ) : (
          <Card styles={item.styles}>{null}</Card>
        )}
      </Grid>
    );
  });
};
