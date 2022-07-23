import Head from "next/head";
import Link from "next/link";

import type { ReactElement } from "react";

import { styled, theme } from "@styles/stitches.config";

import { Logo } from "@components/Logos";
import { Navigation } from "@components/Navigation";
import { Text } from "@components/Text";
import { Box } from "@components/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>On End Studio</title>
      </Head>
      <Text as="h1" size="r2" weight="light" css={{ marginBottom: "$3" }}>
        Some really nice things for your home ✸ Made upright with care by Justin
        Belcher in San Francisco.
      </Text>
      <Link href="/work" passHref>
        <Text as="a" size="r1" weight="light" decoration="border" hover>
          View my work ↗
        </Text>
      </Link>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return (
    <GridBox>
      <Box css={{ gridArea: "logo", alignSelf: "center", padding: "0 $4" }}>
        <Logo size="large" />
      </Box>
      <Box css={{ gridArea: "nav", alignSelf: "center", padding: "0 $4" }}>
        <Navigation />
      </Box>
      <Box
        css={{
          gridArea: "intro",
          alignSelf: "end",
          padding: "$4",
          paddingBottom: 96,
        }}
      >
        {page}
      </Box>
      <Box
        css={{
          gridArea: "separator",
          backgroundColor: "$border",
          height: "100vh",
        }}
      />
      <Box
        css={{
          gridArea: "lede",
          height: "100%",
          background:
            "url(/photos/coffeetable-intro.jpg) center center no-repeat",
          backgroundSize: "cover",
          borderTop: "1px solid $border",
        }}
      />
    </GridBox>
  );
};

const GridBox = styled("div", {
  display: "grid",
  gridTemplateRows: "150px 1fr",
  gridTemplateColumns: "1fr 1px 1fr",
  gridTemplateAreas: "'logo separator nav' 'intro separator lede'",
  minHeight: "100%",
  fontFamily: "$primary",
  backgroundColor: "$siteBg",
});
