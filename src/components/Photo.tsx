import Image from "next/image";

import { Box } from "@components/Box";

interface PhotoProps {
  src: string;
  alt: string;
  priority?: boolean;
  ratio?: number;
}
export const Photo = ({
  src,
  alt,
  ratio = 1 / 1,
  priority = false,
}: PhotoProps) => {
  return (
    <Box
      css={{ position: "relative", width: "100%", height: `${100 / ratio}%` }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
    </Box>
  );
};
