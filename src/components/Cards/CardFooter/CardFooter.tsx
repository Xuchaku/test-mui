import React from "react";
import { Link as LinkMui, Stack, Typography } from "@mui/material";
import { format } from "fecha";
import { BLUE_COLOR, GRAY_COLOR } from "../../../constants";
import Link from "../../../types/Link/Link";

type CardFooterTypeProps = {
  links: Link[];
};

const CardFooter = (props: CardFooterTypeProps) => {
  const { links } = props;
  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Typography variant={"caption"} sx={{ mr: "auto" }}>
          {format(new Date(), "YYYY")} Copyright - Foundation theme by {""}
          <Typography variant={"caption"} sx={{ color: BLUE_COLOR }}>
            Stylemixthemes
          </Typography>
        </Typography>
        {links.map((link) => {
          return (
            <LinkMui
              sx={{ color: link.active ? BLUE_COLOR : GRAY_COLOR }}
              variant={"caption"}
              underline={"none"}
              href={link.href}
            >
              {link.text}
            </LinkMui>
          );
        })}
      </Stack>
    </>
  );
};

export default CardFooter;
