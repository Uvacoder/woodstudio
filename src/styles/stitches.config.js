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
      4: "32px",
      5: "48px",
    },
    sizes: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "48px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "18px",
      4: "21px",
      5: "30px",
      6: "42px",
      r1: "2.5vw",
      r2: "3.25vw",
    },
    fonts: {
      primary: '"Open Sauce Sans", sans-serif',
      secondary: '"Open Sauce Sans", sans-serif',
    },
  },
  utils: {},

  media: {
    m: "(min-width: 600px)",
    l: "(min-width: 900px)",
  },
});
