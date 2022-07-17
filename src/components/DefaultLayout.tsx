import { styled } from "@styles/stitches.config";

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
    <Grid>
      <Navigation />
      {children}
      <Footer />
    </Grid>
  );
};

export default DefaultLayout;
