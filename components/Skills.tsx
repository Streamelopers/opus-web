import { Box, Badge, Text, Divider } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box mt="5">
      <Text fontWeight="600" fontSize="xl">
        Habilidades
      </Text>
      <Divider mt="2" mb="3" />
      <Box mt="1">
        <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
          Vue
        </Badge>
        <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
          React
        </Badge>
        <Badge colorScheme="blue" padding="1" mr="2" borderRadius="10px">
          Nuxt
        </Badge>
      </Box>
    </Box>
  );
};

export default Skills;
