import { Box } from "@components/Box";
import { Image } from "@components/Image";
import { styled } from "@styles/stitches.config";

type ButtonProps = {
  enabled: boolean;
  onClick: () => void;
};

export const PrevButton = ({ enabled, onClick }: ButtonProps) => (
  <Button className="prev" onClick={onClick} disabled={!enabled}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 48 48"
    >
      <path d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z" />
    </svg>
  </Button>
);

export const NextButton = ({ enabled, onClick }: ButtonProps) => (
  <Button className="next" onClick={onClick} disabled={!enabled}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 48 48"
    >
      <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
    </svg>
  </Button>
);

const Button = styled("button", {
  display: "flex",
  outline: 0,
  cursor: "pointer",
  backgroundColor: "rgba(0,0,0,0.12)",
  touchAction: "manipulation",
  position: "absolute",
  zIndex: 1,
  top: "50%",
  transform: "translateY(-50%)",
  border: 0,
  width: 44,
  height: 60,
  justifyContent: "center",
  alignItems: "center",
  fill: "#fff",
  padding: 0,

  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  "&:disabled": {
    cursor: "default",
    opacity: 0.3,
  },

  "&.prev": {
    left: 0,
  },

  "&.next": {
    right: 0,
  },
});

type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  src: string;
  alt?: string;
};

export const Thumb = ({ selected, onClick, src, alt = "" }: ThumbProps) => (
  <Slide className={selected ? "is-selected" : ""}>
    <Thumbnail type="button" onClick={onClick}>
      <Image className="embla__slide__thumbnail" src={src} alt={alt} />
    </Thumbnail>
  </Slide>
);

const Slide = styled(Box, {
  position: "relative",
  paddingRight: 6,
  minWidth: "22%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "&.is-selected img": { opacity: 1 },
});

const Thumbnail = styled("button", {
  touchAction: "manipulation",
  cursor: "pointer",
  border: 0,
  outline: 0,
  margin: 0,
  padding: 0,
  height: 100,
  width: "100%",
  backgroundColor: "transparent",
  position: "relative",
  display: "block",
  overflow: "hidden",

  "& img": {
    position: "absolute",
    opacity: 0.4,
    top: 0,
    bottom: 0,
    left: "-10000%",
    right: "-10000%",
    margin: "auto",
    minWidth: "1000%",
    minHeight: "1000%",
    maxWidth: "none",
    transform: "scale(0.1)",
    transition: "opacity 0.2s",
  },
});
