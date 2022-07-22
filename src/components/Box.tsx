import { styled } from "@styles/stitches.config";

const Box = styled("div", {
  variants: {
    mode: {
      block: { display: "block" },
      flex: { display: "flex" },
      grid: { display: "grid" },
    },
    display: {
      show: { display: "block" },
      hide: { display: "none" },
    },
  },
  defaultVariants: {
    mode: "block",
    display: "show",
  },
  compoundVariants: [
    {
      mode: "block",
      display: "hide",
      css: { display: "none" },
    },
    {
      mode: "flex",
      display: "hide",
      css: { display: "none" },
    },
    {
      mode: "grid",
      display: "hide",
      css: { display: "none" },
    },
    {
      mode: "block",
      display: "show",
      css: { display: "block" },
    },
    {
      mode: "flex",
      display: "show",
      css: { display: "flex" },
    },
    {
      mode: "grid",
      display: "show",
      css: { display: "grid" },
    },
  ],
});

export default Box;
