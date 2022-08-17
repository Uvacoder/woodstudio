import Head from "next/head";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Picture } from "@components/Picture";

export default function About() {
  const P = ({ children }) => (
    <Text
      as="p"
      size={{ "@intiial": "2", "@m": "3" }}
      lineHeight="paragraph"
      css={{ marginBottom: "$2" }}
    >
      {children}
    </Text>
  );
  return (
    <>
      <Head>
        <title>About Justin | On End Studio</title>
      </Head>
      <Grid mode="grid" layout={{ "@initial": "mobile", "@m": "desktop" }}>
        <ContentBox padding={{ "@initial": "compact", "@m": "comfortable" }}>
          <Text
            as="h1"
            family="secondary"
            style="italic"
            size={{ "@initial": "6", "@m": "6" }}
            weight="light"
            lineHeight="tight"
            css={{ marginBottom: "$3" }}
          >
            About Me
          </Text>
          <P>
            Hi 👋. My name is Justin Belcher. I am a designer and furniture
            maker based out of San Francisco, CA. This site is a collection of
            my work.
          </P>
          <P>
            I grew up as a farm kid in West Virginia, helping my family build
            fences, buildings, and houses. I got my start in woodworking in
            2012, when I was on the hunt for a mid-century credenza for our
            first home in Durham, NC. At the time I didn't understand why a
            rectangle of wood costs $3,000, but a friend and a skilled named
            artist Elijah Leed was willing to show me the ropes so I could build
            it myself. I've been obsessed ever since.
          </P>
          <P>
            My work focuses on unexpected forms grounded in a modern
            scandanivian vernacular. I offer design services, millwork
            fabrication, and lovingly crafted, functional pieces of furniture
            made by hand under the worried oversight of my shop dog Pixie.
          </P>
          <P>
            When not making furniture at my small home shop in the Castro or at
            Hunt Projects in the Bayview, I am a full-time designer and manager
            at Google in SF. Please get in touch if there's anything we could
            realize together.
          </P>
        </ContentBox>
        <Box
          css={{
            width: 1,
            height: "100%",
            backgroundColor: "$border",
          }}
        />
        <Picture src="/photos/me-1440w" alt="Portrait of Justin Belcher" />
      </Grid>
    </>
  );
}
const Grid = styled(Box, {
  gridTemplateRows: "1fr",
  variants: {
    layout: {
      desktop: { gridTemplateColumns: "1fr 1px 1fr" },
      mobile: { gridTempalteColumns: "1fr" },
    },
  },
});
const ContentBox = styled("div", {
  variants: {
    padding: {
      compact: { padding: "$3 $2" },
      comfortable: { padding: "$5 $4" },
    },
  },
});
