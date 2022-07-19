import { styled, theme } from "@styles/stitches.config";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const Grid = styled("div", {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "150px 1fr",
  minHeight: "100%",
  fontFamily: theme.fonts.primary,
  backgroundColor: theme.colors.siteBg,
});

export const DefaultLayout = ({ children }) => {
  return (
    <Grid>
      <Navigation />
      {children}
      <Footer />
    </Grid>
  );
};

export default DefaultLayout;
