import { styled } from "@styles/stitches.config";

import type { ReactNode } from "react";

import { Box } from "@components/Box";
import { NavWithLogo as Navigation } from "@components/Navigation";
import { Footer } from "@components/Footer";

interface PageLayoutProps {
  children?: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <GridBox
      mode="grid"
      layout={{
        "@initial": "mobile",
        "@m": "desktop",
      }}
    >
      <Navigation border />
      {children}
      <Footer border />
    </GridBox>
  );
};

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
