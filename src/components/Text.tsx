import { styled } from "@styles/stitches.config";

export const Text = styled("span", {
  margin: "0",
  fontVariantNumeric: "tabular-nums",

  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
      6: { fontSize: "$6" },
      r1: { fontSize: "$r1" },
      r2: { fontSize: "$r2" },
    },
    color: {
      black: { color: "$black" },
    },
    weight: {
      light: { fontWeight: 300 },
      normal: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      semiBold: { fontWeight: 600 },
      bold: { fontWeight: 700 },
    },
    lineHeight: {
      none: { lineHeight: 1 },
      tight: { lineHeight: 1.15 },
      paragraph: { lineHeight: 1.4 },
    },
    style: {
      normal: { fontStyle: "normal" },
      italic: { fontStyle: "italic" },
    },
    transform: {
      none: { textTransform: "none" },
      uppercase: { textTransform: "uppercase" },
    },
    decoration: {
      none: { textDecoration: "none" },
      underline: { textDecoration: "underline" },
      border: { textDecoration: "none", borderBottom: "2px solid $black" },
    },
    hover: {
      true: {
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  compoundVariants: [
    {
      decoration: "border",
      hover: true,
      css: {
        "&:hover": {
          textDecoration: "none",
          borderBottom: "none",
        },
      },
    },
    {
      decoration: "underline",
      hover: true,
      css: {
        textDecoration: "none",
      },
    },
  ],
  defaultVariants: {
    size: "3",
    weight: "normal",
    lineHeight: "paragraph",
    style: "normal",
    transform: "none",
    decoration: "none",
    color: "black",
  },
});
