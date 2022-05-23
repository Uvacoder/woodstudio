import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      tan: "#f3f1ef",
      black: "#211912",
    },
    fonts: {
      sauce: "'Open Sauce Sans', -apple-system, system-ui, sans-serif",
    },
  },
  media: {
    tablet: "(min-width: 425px)",
    desktop: "(min-width: 760px)",
  },
});
