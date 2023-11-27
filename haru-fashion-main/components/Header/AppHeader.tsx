import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  desc?: string;
  keywords?: string;
};

const defaultDesc =
  "Meow Fashion e-commerce developed with Next.JS. Coded with 🖤 by Sat Naing (satnaing.dev).";
const defaultKeywords =
  "Meow Fashion, Online Shop, E-commerce, Sat Naing, NextJS";

const AppHeader: React.FC<Props> = ({
  title = "Meow Fashion",
  desc = defaultDesc,
  keywords = defaultKeywords,
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta content={desc} name="description" key="description" />
      <meta content={keywords} name="keywords" key="keywords" />
      <meta property="og:description" content={desc} key="og_description" />
      <meta property="og:title" content={title} key="og_title" />
      <meta name="twitter:title" content={title} key="twitter_title" />
      <meta
        name="twitter:description"
        content={desc}
        key="twitter_description"
      />
    </Head>
  );
};

export default AppHeader;
