import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  typography,
  shadow,
  layout,
  border,
} from "styled-system";

const InputSolid = styled.input`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  display: block;
  padding: 1.275rem 1.75rem;
  background-clip: padding-box;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 10px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  ${layout};
  ${border};
  &:focus,
  &:active,
  &.active {
    border-color: ${({ theme, focusColor }) => theme.colors[focusColor]};
    outline: 0;
    box-shadow: none;
  }
`;

const InputAnimation = styled.div`
  position: relative;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  ${layout};
  ${border};
  input {
    width: 100%;
    padding: 1.275rem 1rem;
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    font-size: 21px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.56px;
    border-radius: 10px;
    background-clip: padding-box;
    transition: all 0.3s ease-out;
    &:focus {
      border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
      outline: none;
    }
  }
  input:focus ~ label {
    top: 0px;
    left: 15px;
  }

  label {
    background-color: ${({ theme }) => theme.colors.light};
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkShade};
    top: 50%;
    padding: 0 10px;
    left: 15px;
    border-radius: 5px;
    margin-bottom: 0;
    transform: translateY(-50%);
    position: absolute;
    transition: 0.4s;
    pointer-events: none;
  }
`;

const Input = ({
  variant = "solid",
  type = "text",
  focusColor = "secondary",
  placeholder,
  css,
  ...rest
}) => {
  return variant === "animation" ? (
    <InputAnimation css={css} {...rest}>
      <input width="100%" type={type} color="text" bg="light" />
      <label>{placeholder}</label>
    </InputAnimation>
  ) : (
    <InputSolid
      width="100%"
      type={type}
      color="text"
      bg="light"
      placeholder={placeholder}
      focusColor={focusColor}
      css={css}
      {...rest}
    />
  );
};

export default Input;
