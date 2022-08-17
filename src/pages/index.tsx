import Head from "next/head";
import Link from "next/link";
import type { ReactElement } from "react";

import { Logo } from "@components/Logos";
import { Navigation } from "@components/Navigation";
import { PageLayout } from "@components/PageLayout";
import { Text } from "@components/Text";
import { Box } from "@components/Box";
import { Picture } from "@components/Picture";

import { styled } from "@styles/stitches.config";
import { useMobileDetect } from "@lib/useMobileDetect";
import { pictureSizes } from "@lib/constants";

export default function Home() {
  const detect = useMobileDetect();

  const getPictureSize = () =>
    detect.isMobile() ? pictureSizes.mobile : pictureSizes.desktop;

  return (
    <>
      <Head>
        <title>On End Studio</title>
      </Head>

      <Box display={{ "@initial": "show", "@m": "hide" }}>
        <Picture
          src={`/photos/coffeetable-front-${getPictureSize()}`}
          alt="Coffee table"
        />
      </Box>

      <ContentBox padding={{ "@initial": "compact", "@m": "comfortable" }}>
        <Text
          as="h1"
          size={{ "@initial": "r4", "@m": "r2" }}
          weight="light"
          css={{ marginBottom: "$3" }}
        >
          Some really nice things for your home ✷ Made upright with care by
          Justin Belcher in San Francisco.
        </Text>
        <Link href="/work" passHref>
          <Text
            as="a"
            size={{ "@initial": "r3", "@m": "r1" }}
            weight="light"
            decoration="border"
            hover
          >
            View my work <ArrowIcon src="/arrow.svg" alt="" />
          </Text>
        </Link>
      </ContentBox>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  const detect = useMobileDetect();

  const getPictureSize = () =>
    detect.isMobile() ? pictureSizes.mobile : pictureSizes.desktop;
  return (
    <>
      {/* Custom desktop layout */}
      <Box display={{ "@initial": "hide", "@m": "show" }}>
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
              paddingBottom: 32,
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
              background: `url(/photos/coffeetable-intro-${getPictureSize()}.jpg) center center no-repeat`,
              backgroundImage: "url(/photos/coffeetable-intro-1440w.webp)",
              backgroundSize: "cover",
              borderTop: "1px solid $border",
            }}
          />
        </GridBox>
      </Box>

      {/* Mobile fallback */}
      <Box display={{ "@initial": "show", "@m": "hide" }}>
        <PageLayout>{page}</PageLayout>
      </Box>
    </>
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

const ContentBox = styled("div", {
  variants: {
    padding: {
      compact: { padding: "$4 $2" },
      comfortable: { padding: "$6 $4" },
    },
  },
});

const ArrowIcon = styled("img", {
  height: "0.65em",
  display: "inline",
  paddingTop: "0.05em",
  paddingBottom: "0.1em",
});
