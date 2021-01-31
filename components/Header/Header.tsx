import React from "react";
import NextLink from "next/link";
import { Box, Flex, Image, Link, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container maxW="xl">
      <Flex bg="#63B3ED" px={40} py={4} justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            htmlHeight="50"
            htmlWidth="50"
          />
          <NextLink href="/">
            <Link px={8} color="white" cursor="pointer">
              Opus
            </Link>
          </NextLink>
        </Flex>
        <Box>
          <NextLink href="/">
            <Link px={8} color="white" cursor="pointer">
              Inicio
            </Link>
          </NextLink>
          <NextLink href="/iniciar-sesion">
            <Link px={8} color="white" cursor="pointer">
              Iniciar sesión
            </Link>
          </NextLink>
          <NextLink href="/registro">
            <Link px={8} color="white" cursor="pointer">
              Registro
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Container>
  );
};
export default Header;
