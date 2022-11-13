import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type MenuItem = {
  src: OverridableComponent<SvgIconTypeMap>;
  color: string;
  size: number;
};
export default MenuItem;
