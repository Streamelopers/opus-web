import React from "react";
import NextLink from "next/link";
import { Box, Flex, Image, Link, Container } from "@chakra-ui/react";

const Header = () => {
  const NavLink = ({ children, ...props }) => (
    <NextLink href={props.href}>
      <Link px={8} color="white" {...props} cursor="pointer">
        {children}
      </Link>
    </NextLink>
  );

  return (
    <Container maxW="xl">
      <Flex bg="#63B3ED" px={40} py={4} justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            htmlHeight="50"
            htmlWidth="50"
          />
          <NavLink href="/" pl={3} color="white">
            Opus
          </NavLink>
        </Flex>
        <Box>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Box>
      </Flex>
    </Container>
  );
};
export default Header;
