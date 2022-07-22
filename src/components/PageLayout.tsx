import { styled, theme } from "@styles/stitches.config";

import Box from "@components/Box";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const GridBox = styled(Box, {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "150px 1fr",
  minHeight: "100%",
  fontFamily: theme.fonts.primary,
  backgroundColor: theme.colors.siteBg,
});

export const PageLayout = ({ children }) => {
  return (
    <GridBox mode="grid">
      <Navigation />
      {children}
      <Footer />
    </GridBox>
  );
};

export default PageLayout;
