import Head from "next/head";
import Link from "next/link";

import { styled, theme } from "@styles/stitches.config";

import GridItem from "@components/GridItem";

const IntroText = styled("h1", {
  marginBottom: "$3",
  fontSize: "$h1",
  lineHeight: "1.4",
  fontWeight: 300,
});

const ViewMore = styled("a", {
  color: theme.colors.black,
  fontSize: "$h2",
  fontWeight: 300,
  textDecoration: "none",
});

const Home = () => {
  return (
    <>
      <Head>
        <title>On End Studio</title>
      </Head>
      <GridItem as="intro" align="end" css={{ padding: "$4" }}>
        <IntroText>
          Some really nice things for your home ✸ Made upright with care by
          Justin Belcher in San Francisco.
        </IntroText>
        <Link href="/work" passHref>
          <ViewMore>View my work ↗</ViewMore>
        </Link>
      </GridItem>
      <GridItem
        as="lede"
        css={{
          background:
            "url(/photos/coffeetable-front.jpg) center center no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      />
    </>
  );
};

export default Home;
