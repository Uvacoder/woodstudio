import { theme } from "@styles/stitches.config";

import Flex from "@components/Flex";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";
import Header from "@components/Logo";
import Navigation from "@components/Navigation";

const PageLayout = ({ children }) => {
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
      <Grid
        rows="150px 1fr"
        columns="1fr 1px 1fr"
        areas="'brand separator nav' 'intro separator lede'"
      >
        <Header />
        <Navigation />
        <GridItem
          as="separator"
          css={{ backgroundColor: "$border", height: "100vh" }}
        />
        {children}
      </Grid>
    </Flex>
  );
};
export default PageLayout;
