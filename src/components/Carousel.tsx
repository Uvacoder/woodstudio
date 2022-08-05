import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";

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
            <Slide key={i} css={{ height: 300 }}>
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
  backgroundColor: "#f7f7f7",
  padding: 20,
  maxWidth: 670,
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
  height: 300,
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
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }: ButtonProps) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

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
