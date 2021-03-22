import { Box, Button, Text, Divider, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

const RelatedJobs = () => {
  return (
    <Box mt="5" mb="5">
      <Text fontSize="2xl" fontWeight="600">
        ¿Estás buscando más trabajos?
          </Text>
      <Divider mt="2" mb="3" />

      <Box>
        <Box
          mt="5"
          padding="5px 10px"
          borderRadius="10px"
          _hover={{
            bg: "gray.50"
          }}
        >
          <Flex alignItems="center">
            <Box p="2">
              <Image
                src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
                width="50"
                height="50"
                loading="lazy"
              />
            </Box>
            <Box flex="1">
              <Text>
                <NextLink href={`/job/123`}>
                  <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
                </NextLink>
              </Text>
              <Text>
                <Text as="span" color="gray.400">
                  en
                    </Text>
                <Text as="strong"> CyberCoder </Text>
                <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
              </Text>
            </Box>
            <Box>
              <Text>hace 1 semana</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          padding="5px 10px"
          borderRadius="10px"
          _hover={{
            bg: "gray.50"
          }}
        >
          <Flex alignItems="center">
            <Box p="2">
              <Image
                src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
                width="50"
                height="50"
                loading="lazy"
              />
            </Box>
            <Box flex="1">
              <Text>
                <NextLink href={`/job/123`}>
                  <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
                </NextLink>
              </Text>
              <Text>
                <Text as="span" color="gray.400">
                  en
                    </Text>
                <Text as="strong"> CyberCoder </Text>
                <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
              </Text>
            </Box>
            <Box>
              <Text>hace 1 semana</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          padding="5px 10px"
          borderRadius="10px"
          _hover={{
            bg: "gray.50"
          }}
        >
          <Flex alignItems="center">
            <Box p="2">
              <Image
                src="https://vuejobs.com/storage/avatars/yBYKiaPkbln6yDt4z0kA4sUikiCsq5JQRYc5PU0y.png"
                width="50"
                height="50"
                loading="lazy"
              />
            </Box>
            <Box flex="1">
              <Text>
                <NextLink href={`/job/123`}>
                  <Link color="blue.400">Senior Frontend Developer (VueJS)</Link>
                </NextLink>
              </Text>
              <Text>
                <Text as="span" color="gray.400">
                  en
                    </Text>
                <Text as="strong"> CyberCoder </Text>
                <Text as="span">Washington, DC, USA - Washington, DC, USA</Text>
              </Text>
            </Box>
            <Box>
              <Text>hace 1 semana</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Button w="100%" bg="blue.300" _hover={{ bg: "blue.400" }} color="white">
        Cargar más trabajos
          </Button>
    </Box>
  );
};

export default RelatedJobs;



