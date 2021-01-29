import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";

import Header from "@/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
