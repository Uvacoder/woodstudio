import { styled } from "@styles/stitches.config";

const LogoImage = styled("img", {
  variants: {
    size: {
      small: { width: 166 },
      large: { width: 360 },
    },
  },
});

const AvatarImage = styled("img", {
  variants: {
    size: {
      small: { width: 48 },
      large: { width: 64 },
    },
  },
});

export const Logo = (props) => (
  <LogoImage src="/logo.svg" alt="On End Studio" {...props} />
);

export const Avatar = (props) => (
  <AvatarImage src="/avatar.svg" alt="" {...props} />
);
