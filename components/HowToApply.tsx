import { Box, Button, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import NextLink from "next/link";

type HowToApplyProps = {
  howToApply: string;
  applicationTarget: string;
};

const HowToApply: FC<HowToApplyProps> = ({ howToApply, applicationTarget = "http://google.com" }: HowToApplyProps) => {
  return (
    <Box bg="gray.100" borderRadius="10px" p="5" mt="5">
      <Text fontWeight="600" fontSize="2xl">
        Cómo aplicar
      </Text>
      <Text>{howToApply}</Text>

      <NextLink href={applicationTarget} passHref={true}>
        <Button colorScheme="teal" size="md" mt="3">
          Aplica ahora!
        </Button>
      </NextLink>
    </Box>
  );
};

export default HowToApply;
