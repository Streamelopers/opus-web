import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import Input from "./Input";

const InputGroupStyled = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  margin-top: -2px;
  top: 50%;
  left: 27px;
  font-size: 19px;
  color: ${({ theme }) => rgba(theme.colors.dark, 0.4)};
  transform: translateY(-50%);
`;

const InputGroup = ({
  type = "text",
  focusColor = "secondary",
  icon = <span className="far fa-envelope" />,
  ...rest
}) => {
  return (
    <InputGroupStyled>
      <Input
        width="100%"
        type={type}
        color="text"
        bg="light"
        focusColor={focusColor}
        pl="4.125rem"
        {...rest}
      />
      <Icon className="d-flex align-items-center">{icon}</Icon>
    </InputGroupStyled>
  );
};

export default InputGroup;
