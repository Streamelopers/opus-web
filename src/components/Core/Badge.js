import React from "react";
import styled from "styled-components";
import {
  color,
  background,
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from "styled-system";

const BadgeSolid = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.41px;
  border-radius: 5px;
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  ${color};
  ${background};
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`;

const Badge = ({ color = "light", bg = "primary", ...rest }) => {
  return (
    <BadgeSolid
      color={color}
      border={`1px solid`}
      borderColor={bg}
      bg={bg}
      {...rest}
    />
  );
};

export default Badge;
