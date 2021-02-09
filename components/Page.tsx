import Head from "next/head";
import React from "react";

interface PageProps {
  children: JSX.Element;
  title?: string;
  description?: string;
}
export default function Page({
  children,
  title = "Opus Web",
  description = "Opus Web es el mejor sitio para encotrar empleo en República Dominicana"
}: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Opus Web" />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content="https://static-tweet.now.sh/assets/twitter-card.png" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </>
  );
}

Page.defaultProps = {
  description: "Opus Web es el mejor sitio para encotrar empleo en República Dominicana"
};
