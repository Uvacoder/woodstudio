import { styled, theme } from "@styles/stitches.config";

import { Box } from "@components/Box";
import { Navigation } from "@components/Navigation";
import { Footer } from "@components/Footer";

const GridBox = styled(Box, {
  gridTemplateColumns: "1fr",
  minHeight: "100%",
  fontFamily: "$primary",
  backgroundColor: "$siteBg",
  variants: {
    layout: {
      desktop: { gridTemplateRows: "150px 1fr" },
      mobile: { gridTemplateRows: "64px 1fr" },
    },
  },
});

export const PageLayout = ({ children }) => {
  return (
    <GridBox
      mode="grid"
      layout={{
        "@initial": "mobile",
        "@m": "desktop",
      }}
    >
      <Navigation />
      {children}
      <Footer />
    </GridBox>
  );
};

export default PageLayout;
