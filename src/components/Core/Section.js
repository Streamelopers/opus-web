import React from "react";
import Box from "./Box";

const Section = ({ variant = "section", ...rest }) => {
  return variant === "hero" ? (
    <Box
      pt={["8.4375rem", null, null, "11.25rem"]}
      pb={["3.75rem", null, null, "8.4375rem"]}
      {...rest}
    />
  ) : (
    <Box py={["3.75rem", null, null, "7.5rem"]} {...rest} />
  );
};

export default Section;
