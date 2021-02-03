import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const JobInfo = () => {
  return (
    <HStack spacing="35px" bg="gray.50" height="80px" padding="15px" borderRadius="10px">
      <Box h="40px">
        <Text fontWeight="700">Location</Text>
        <Text>Remote</Text>
      </Box>
      <Box h="40px">
        <Text fontWeight="700">Job Type</Text>
        <Text>Full-time</Text>
      </Box>
      <Box h="40px">
        <Text fontWeight="700">Salary</Text>
        <Text>USD 40000-50000</Text>
      </Box>
      <Box h="40px">
        <Text fontWeight="700">Posted</Text>
        <Text>20 hours ago</Text>
      </Box>
    </HStack>
  );
};

export default JobInfo;
