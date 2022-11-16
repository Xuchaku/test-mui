import React from "react";
import { CONTENT_SECTION_FOOTER } from "../../constants";
import { renderCards } from "../../utils";

const Footer = () => {
  return <>{renderCards(CONTENT_SECTION_FOOTER)}</>;
};

export default Footer;
