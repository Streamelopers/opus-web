import React from "react";
import ReactCountdown from "react-countdown";

import { Box, Text, Title } from "../Core";

const CardTime = ({ label, time }) => (
  <Box
    borderRadius={10}
    mx="5px"
    px="10px"
    py="20px"
    pb="12px"
    bg="secondary"
    className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
  >
    <Title variant="card" fontSize={["26px", null, "38px"]} color="light">
      {time}
    </Title>
    <Text
      fontSize={["14px", null, "16px"]}
      variant="small"
      color="lightShade"
      css={`
        white-space: nowrap;
      `}
    >
      {label}
    </Text>
  </Box>
);

const renderer = ({ days, hours, minutes, seconds }) => (
  <Box maxWidth="340px" mx="auto" className="d-flex justify-content-center">
    <CardTime label="Days" time={days} />
    <CardTime label="Hour" time={hours} />
    <CardTime label="Minutes" time={minutes} />
    <CardTime label="Seconds" time={seconds} />
  </Box>
);

const CountDown = ({ date }) => (
  <ReactCountdown date={date} renderer={renderer} />
);

export default CountDown;
