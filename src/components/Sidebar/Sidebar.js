import React, { useState } from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 50;
const MAX = 180;

const CheckStyled = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #2b3940 !important;
  font-size: 16px;
  color: inherit;
  &::before {
    content: "\f0c8";
    font-weight: 400;
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    color: #7e8989;
    margin-right: 11px;
    margin-top: 2px;
  }
  &.active {
    color: #2b3940 !important;
    font-weight: 600;
    &::before {
      content: "\f14a";
      font-weight: 900;
      color: #00b074;
    }
  }
`;

const Check = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <CheckStyled
      className={`toggle-item ${active ? "active" : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {children}
    </CheckStyled>
  );
};

const Sidebar = () => {
  const [rangeValues, setRangeValues] = useState([70, 150]);
  return (
    <>
      {/* <!-- Sidebar Start --> */}
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">Job Type</h4>
        <ul className="list-unstyled filter-check-list">
          <li className="mb-2">
            <Check>Full Time</Check>
          </li>
          <li className="mb-2">
            <Check>Part Time</Check>
          </li>
          <li className="mb-2">
            <Check>Contract</Check>
          </li>
          <li className="mb-2">
            <Check>Internship</Check>
          </li>
          <li className="mb-2">
            <Check>Temporary</Check>
          </li>
        </ul>
      </div>
      <div className="widgets mb-11 ">
        <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
          <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
            Salary Range
          </h4>
          {/* <!-- Range Slider --> */}

          <div className="slider-price w-25 text-right mr-7">
            <p className="font-weight-bold">
              <span
                className="text-primary font-weight-semibold font-size-4 "
                css={`
                  white-space: nowrap;
                `}
              >
                ${rangeValues[0].toFixed()} - {rangeValues[1].toFixed()}K
              </span>
            </p>
          </div>
        </div>
        <div className="graph text-center mx-0 mt-5 position-relative chart-postion">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="range-slider">
          <>
            <Range
              values={rangeValues}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setRangeValues(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  role="button"
                  tabIndex={0}
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "15px",
                    display: "flex",
                    width: "290px",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: rangeValues,
                        colors: ["#ccc", "#00b074", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "24px",
                    width: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "none !important",
                    outline: "none !important",
                  }}
                  css={`
                    &:focus {
                      outline: none !important;
                    }
                  `}
                ></div>
              )}
            />
          </>
        </div>
      </div>
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">
          Experience Level{" "}
        </h4>
        <ul className="list-unstyled filter-check-list">
          <li className="mb-2">
            <Check>All</Check>
          </li>
          <li className="mb-2">
            <Check>Senior</Check>
          </li>
          <li className="mb-2">
            <Check>Mid</Check>
          </li>
          <li className="mb-2">
            <Check>Junior</Check>
          </li>
        </ul>
      </div>
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">Posted Time</h4>
        <ul className="list-unstyled filter-check-list">
          <li className="mb-2">
            <Check>Anytime</Check>
          </li>
          <li className="mb-2">
            <Check>Last day</Check>
          </li>
          <li className="mb-2">
            <Check>Last 3 days</Check>
          </li>
          <li className="mb-2">
            <Check>Last week</Check>
          </li>
        </ul>
      </div>
      {/* <!-- Sidebar End --> */}
    </>
  );
};

export default Sidebar;
