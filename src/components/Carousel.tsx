import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import { Box } from "@components/Box";

import { styled } from "@styles/stitches.config";

import { PhotoType } from "@typings/photo";

type Props = {
  photos: PhotoType[];
  options?: EmblaOptionsType;
};

export const Carousel = ({ photos, options = { loop: false } }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel(options);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevEnabled(embla.canScrollPrev());
    setNextEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Embla>
      <Viewport ref={viewportRef}>
        <Container mode="flex">
          {photos.map((photo, i) => (
            <Slide key={i}>
              <img src={photo.src} alt={photo.alt} />
            </Slide>
          ))}
        </Container>
      </Viewport>
      <PrevButton onClick={scrollPrev} enabled={prevEnabled} />
      <NextButton onClick={scrollNext} enabled={nextEnabled} />
    </Embla>
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

type ButtonProps = {
  enabled: boolean;
  onClick: () => void;
};

const PrevButton = ({ enabled, onClick }: ButtonProps) => (
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

const NextButton = ({ enabled, onClick }: ButtonProps) => (
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

const Thumb = ({ selected, onClick, src, alt = "" }: ThumbProps) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={src} alt={alt} />
    </button>
  </div>
);

// import React, { useState, useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { Thumb } from "./EmblaCarouselThumb";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";

// const EmblaCarousel = ({ slides }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
//   const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
//     containScroll: "keepSnaps",
//     selectedClass: "",
//     dragFree: true
//   });

//   const onThumbClick = useCallback(
//     (index) => {
//       if (!embla || !emblaThumbs) return;
//       if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
//     },
//     [embla, emblaThumbs]
//   );

//   const onSelect = useCallback(() => {
//     if (!embla || !emblaThumbs) return;
//     setSelectedIndex(embla.selectedScrollSnap());
//     emblaThumbs.scrollTo(embla.selectedScrollSnap());
//   }, [embla, emblaThumbs, setSelectedIndex]);

//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     embla.on("select", onSelect);
//   }, [embla, onSelect]);

//   return (
//     <>
//       <div className="embla">
//         <div className="embla__viewport" ref={mainViewportRef}>
//           <div className="embla__container">
//             {slides.map((index) => (
//               <div className="embla__slide" key={index}>
//                 <div className="embla__slide__inner">
//                   <img
//                     className="embla__slide__img"
//                     src={mediaByIndex(index)}
//                     alt="A cool cat."
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="embla embla--thumb">
//         <div className="embla__viewport" ref={thumbViewportRef}>
//           <div className="embla__container embla__container--thumb">
//             {slides.map((index) => (
//               <Thumb
//                 onClick={() => onThumbClick(index)}
//                 selected={index === selectedIndex}
//                 imgSrc={mediaByIndex(index)}
//                 key={index}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmblaCarousel;
