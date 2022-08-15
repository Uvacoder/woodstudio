import { styled } from "@styles/stitches.config";

const Image = styled("img", {
  variants: {
    aspect: {
      square: { aspectRatio: 1 },
      widescreen: { aspectRatio: 16 / 9 },
    },
    display: {
      show: { display: "block" },
      hide: { display: "none" },
    },
    cover: {
      true: { objectFit: "cover" },
    },
  },
});

export const Picture = ({ src, alt, ...rest }) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <Image src={`${src}.jpg`} alt={alt} {...rest} />
    </picture>
  );
};
