import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

import { styled, theme } from "@styles/stitches.config";

import Flex from "@components/Flex";
import Logo from "@components/Logo";
import Navigation from "@components/Navigation";

const IntroText = styled("h1", {
  marginBottom: "$3",
  fontSize: "$resL",
  lineHeight: "1.4",
  fontWeight: 300,
});

const ViewMore = styled("a", {
  color: theme.colors.black,
  fontSize: "$resM",
  fontWeight: 300,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateRows: "150px 1fr",
  gridTemplateColumns: "1fr 1px 1fr",
  gridTemplateAreas: "'logo separator nav' 'intro separator lede'",
});

const Cell = styled("div", {});

const Home = () => {
  return (
    <>
      <Head>
        <title>On End Studio</title>
      </Head>
      <IntroText>
        Some really nice things for your home ✸ Made upright with care by Justin
        Belcher in San Francisco.
      </IntroText>
      <Link href="/work" passHref>
        <ViewMore>View my work ↗</ViewMore>
      </Link>
    </>
  );
};

Home.getLayout = (page: ReactElement, isMobile: boolean) => {
  if (isMobile) {
    return (
      <Flex
        as="section"
        direction="column"
        css={{
          minHeight: "100%",
          fontFamily: theme.fonts.primary,
          backgroundColor: theme.colors.siteBg,
        }}
      >
        <Logo />
        <Navigation />
        {page}
      </Flex>
    );
  }

  return (
    <Flex
      as="section"
      direction="column"
      css={{
        minHeight: "100%",
        fontFamily: theme.fonts.primary,
        backgroundColor: theme.colors.siteBg,
      }}
    >
      <Grid>
        <Cell css={{ gridArea: "logo", alignSelf: "center", padding: "0 $4" }}>
          <Logo />
        </Cell>
        <Cell css={{ gridArea: "nav", alignSelf: "center", padding: "0 $4" }}>
          <Navigation />
        </Cell>
        <Cell
          css={{
            gridArea: "intro",
            alignSelf: "end",
            padding: "$4",
            paddingBottom: 96,
          }}
        >
          {page}
        </Cell>
        <Cell
          css={{
            gridArea: "separator",
            backgroundColor: "$border",
            height: "100vh",
          }}
        />
        <Cell
          css={{
            gridArea: "lede",
            height: "100%",
            background:
              "url(/photos/coffeetable-intro.jpg) center center no-repeat",
            backgroundSize: "cover",
            borderTop: "1px solid $border",
          }}
        />
      </Grid>
    </Flex>
  );
};

export default Home;
