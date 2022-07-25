import Image from "next/image";
import { styled } from "@styles/stitches.config";
import type { ComponentProps, VariantProps } from "@stitches/react";

interface PhotoProps {
  src: string;
  alt: string;
  priority?: boolean;
  aspect: any;
}

// export type WrapperVariants = ComponentProps<typeof PhotoWrapper> &
//   VariantProps<typeof PhotoWrapper>;

export const Photo = ({ src, alt, aspect, priority = false }: PhotoProps) => {
  return (
    <PhotoWrapper aspect={aspect}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
    </PhotoWrapper>
  );
};

const PhotoWrapper = styled("div", {
  position: "relative",
  variants: {
    aspect: {
      square: { width: "100vw", height: "100vw" },
      widescreen: { width: "100vw", height: "56.25vw" },
      threeOverTwo: { width: "100vw", height: "66.66vw" },
    },
  },
});
