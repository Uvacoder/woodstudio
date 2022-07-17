import Head from "next/head";
import Link from "next/link";

import { styled, theme } from "@styles/stitches.config";
import useIsLargescreen from "@hooks/useIsLargescreen";
import GridItem from "@components/GridItem";

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

const Home = () => {
  const isLargescreen = useIsLargescreen();
  console.log(isLargescreen);

  return (
    <>
      <Head>
        <title>On End Studio</title>
      </Head>
      <GridItem
        as="intro"
        align="end"
        css={{ padding: "$4", paddingBottom: 96 }}
      >
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
          height: "100%",
          background:
            "url(/photos/coffeetable-intro.jpg) center center no-repeat",
          backgroundSize: "cover",
          borderTop: "1px solid $border",
        }}
      />
    </>
  );
};

export default Home;
