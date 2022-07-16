import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      tan: "#f3f1ef",
      black: "#211912",
      orange: "#ff955c",

      siteBg: "$tan",
      border: "$black",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "48px",
    },
    sizes: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "48px",
    },
    fontSizes: {},
    fonts: {
      primary: '"Open Sauce Sans", sans-serif',
      secondary: '"Open Sauce Sans", sans-serif',
    },
  },
  utils: {},
  media: {},
});
