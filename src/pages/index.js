import Head from "next/head";
import Nav from "components/Nav";

import { globalStyles } from "styles/global";
import { styled } from "../../stiches.config";

const Logo = styled("img", {});

export default function Home() {
  globalStyles();

  return (
    <>
      <Head>
        <title>On End Studio</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </>
  );
}
 