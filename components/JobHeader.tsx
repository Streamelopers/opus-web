import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React, { FC } from "react";

type JobsHeaderProps = {
  picture: string;
  title: string;
  location: string;
  website: string;
};

const JobHeader: FC<JobsHeaderProps> = ({ picture, title, location, website }: JobsHeaderProps) => {
  return (
    <Flex mt="2em" mb="2em">
      <Flex mr="6">
        <Image width="100" height="100" src={picture} loading="lazy" />
      </Flex>
      <Flex flexDirection="column" justifyContent="center">
        <Heading fontWeight="semibold" fontSize="2xl">
          {title}
        </Heading>
        <Box>
          <Text color="#adb5bd" as="span">
            en
          </Text>
          <Text as="strong" ml="1" mr="1">
            {location}
          </Text>
          <Text as="span">- </Text>
          <NextLink href={website} passHref={true}>
            <Link color="green.300">visita la página de la compañia</Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobHeader;
