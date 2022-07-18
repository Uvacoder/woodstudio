import { styled } from "@styles/stitches.config";

const Image = styled("img", {
  variants: {
    size: {
      small: { width: 166 },
      large: { width: 360 },
    },
  },
});

const Logo = () => (
  <Image
    src="/logo.svg"
    alt="On End Studio"
    size={{
      "@initial": "small",
      "@large": "large",
    }}
  />
);

export default Logo;
