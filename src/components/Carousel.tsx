import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import { Box } from "@components/Box";
import { PrevButton, NextButton, Thumb } from "@components/CarouselControls";
import { styled } from "@styles/stitches.config";

import { PhotoType } from "@typings/photo";

type Props = {
  photos: PhotoType[];
  options?: EmblaOptionsType;
};

export const Carousel = ({
  photos,
  options = { loop: false, skipSnaps: false },
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewport, embla] = useEmblaCarousel(options);
  const [thumbViewport, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const thumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;

    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevEnabled(embla.canScrollPrev());
    setNextEnabled(embla.canScrollNext());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <Box>
      <Embla>
        <Viewport ref={mainViewport}>
          <Container mode="flex">
            {photos.map(({ src, alt }, index) => (
              <Slide key={index}>
                <img src={src} alt={alt} />
              </Slide>
            ))}
          </Container>
        </Viewport>
        <PrevButton onClick={scrollPrev} enabled={prevEnabled} />
        <NextButton onClick={scrollNext} enabled={nextEnabled} />
      </Embla>
      <Embla className="thumbs" css={{ padding: "6px 0 6px 6px" }}>
        <Viewport ref={thumbViewport}>
          <Container mode="flex">
            {photos.map(({ src, alt }, index) => (
              <Thumb
                key={index}
                onClick={() => thumbClick(index)}
                selected={index === selectedIndex}
                src={src}
                alt={alt}
              />
            ))}
          </Container>
        </Viewport>
      </Embla>
    </Box>
  );
};

const Embla = styled(Box, {
  position: "relative",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
});

const Viewport = styled(Box, {
  overflow: "hidden",
  width: "100%",
  "&.is-draggable": {
    cursor: "grab",
  },
  "&.is-dragging": {
    cursor: "grabbing",
  },
});

const Container = styled(Box, {
  display: "flex",
  userSelect: "none",
  "-webkit-touch-callout": "none",
  "-khtml-user-select": "none",
  "-webkit-tap-tighlightColor": "transparent",
});

const Slide = styled(Box, {
  position: "relative",
  flex: "0 0 100%",
  maxWidth: "100%",
  marginLeft: 10,
  height: "60vh",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
