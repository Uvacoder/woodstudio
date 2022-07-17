import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";

import { styled, theme } from "@styles/stitches.config";

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

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Cell
        css={{
          gridArea: "",
          alignSelf: "end",
          padding: "$4",
          paddingBottom: 96,
        }}
      >
        {page}
      </Cell>
      <Cell
        css={{
          gridArea: "",
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
