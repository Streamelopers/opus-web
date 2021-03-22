import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Header from "@/components/Header";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  }
});

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Header />
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Container maxW="1140px">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
