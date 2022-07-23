import { styled } from "@styles/stitches.config";

export const Text = styled("span", {
  lineHeight: 1.4,
  margin: "0",
  fontWeight: 400,
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
  },
  defaultVariants: {
    size: "3",
    color: "black",
  },
});
