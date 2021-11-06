import React from "react";
import styled from "styled-components";
import { rgba, darken, desaturate } from "polished";
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

import { device } from "../../utils";

const ButtonSolid = styled.button`
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.75rem 1.5625rem;
  font-size: 1.1rem;
  line-height: 1.88;
  border-radius: 8px;

  min-width: 175px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:active:focus,
  &.active:focus,
  &:focus {
    outline: none;
    box-shadow: ${({ theme, bg }) =>
      `0 0 0 0.2rem ${rgba(theme.colors[bg], 0.5)}`};
    background-color: ${({ theme, bg }) =>
      darken(0.0765, desaturate(0.18, theme.colors[bg]))};
  }

  &:hover {
    @media ${device.md} {
      transform: translateY(-8px);
    }
  }

  ${color};
  ${background};
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`;

const Button = ({
  variant = "solid",
  color = "light",
  bg = "primary",
  ...rest
}) => {
  return variant === "solid" ? (
    <ButtonSolid color={color} borderColor={bg} bg={bg} {...rest} />
  ) : (
    <ButtonSolid
      color={color}
      border={`1px solid`}
      borderColor={bg}
      bg={bg}
      {...rest}
    />
  );
};

export default Button;
