import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p`
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1.71;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphLarge = styled.p`
  font-size: 1.1875rem;
  letter-spacing: -0.2px;
  line-height: 1.69;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphSmall = styled.p`
  font-size: 0.9375rem;
  letter-spacing: -0.1px;
  line-height: 1.73;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Text = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case "sm":
      TextRender = ParagraphSmall;
      break;
    case "lg":
      TextRender = ParagraphLarge;
      break;
    default:
      TextRender = Paragraph;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;
