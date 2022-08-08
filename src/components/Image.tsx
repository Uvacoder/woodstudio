import { styled } from "@styles/stitches.config";

export const Image = styled("img", {
  variants: {
    aspect: {
      square: { aspectRatio: 1 },
      widescreen: { aspectRatio: 16 / 9 },
    },
    cover: {
      true: { objectFit: "cover" },
    },
  },
});
