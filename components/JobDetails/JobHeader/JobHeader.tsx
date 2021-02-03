import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const JobHeader = () => {
  return (
    <Flex mt="2em" mb="2em">
      <Flex mr="6">
        <Image
          width="100"
          height="100"
          src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
        />
      </Flex>
      <Flex flexDirection="column" justifyContent="center">
        <Heading fontWeight="semibold">Senior Frontend Developer</Heading>
        <Box>
          <Text color="#adb5bd" as="span">
            en
          </Text>
          <Text as="strong" ml="1" mr="1">
            Jibble
          </Text>
          <Text as="span">- </Text>
          <Link color="green.300">visita la página de la compañia</Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobHeader;
