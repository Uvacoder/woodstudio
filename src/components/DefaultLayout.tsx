import { styled, th } from "@styles/stitches.config";

import Flex from "@components/Flex";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const Grid = styled("div", {
  gridTemplateColumns: "1fr",
  "@large": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "150px 1fr",
  },
  "@small": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "64px 1fr",
    gridTemplateAreas: "'nav' 'content'",
  },
});

export const DefaultLayout = ({ children }) => {
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
        <Navigation />
        {children}
        <Footer />
      </Grid>
    </Flex>
  );
};

export default DefaultLayout;
