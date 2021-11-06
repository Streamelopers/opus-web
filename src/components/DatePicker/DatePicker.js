import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const DatePickerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  .DayPickerInput {
    display: block;
  }
  .DayPickerInput-Overlay {
    top: 4px;
  }
  .DayPicker-Day {
    padding: 0.35rem 0.5rem;
  }
  .DayPicker-Day--today {
    color: ${({ theme }) => theme.colors.primary};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DatePickerComponent = ({ className }) => {
  const today = new Date();
  return (
    <DatePickerStyled>
      <DayPickerInput
        dayPickerProps={{ disabledDays: { before: today } }}
        value={today}
        inputProps={{ className: className, readOnly: true, required: true }}
      />
    </DatePickerStyled>
  );
};

export default DatePickerComponent;
