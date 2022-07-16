import { styled } from "@styles/stitches.config";

const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      evenly: { justifyContent: "space-evenly" },
      stretch: { justifyContent: "stretch" },
    },
    align: {
      start: { alignItems: "start" },
      end: { alignItems: "end" },
      center: { alignItems: "center" },
      between: { alignItems: "space-between" },
      around: { alignItems: "space-around" },
      evenly: { alignItems: "space-evenly" },
      stretch: { alignItems: "stretch" },
    },
    gap: {
      s: { gap: "$1" },
      m: { gap: "$2" },
      l: { gap: "$3" },
      xl: { gap: "$4" },
    },
  },
});

export default Flex;
