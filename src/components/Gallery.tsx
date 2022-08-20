import { Carousel } from "react-responsive-carousel";
// CSS is loaded in _app.ts

import { Box } from "@components/Box";
import { Picture } from "@components/Picture";
import { styled } from "@styles/stitches.config";

import { PhotoType } from "@styles/typings/photo";
import { useMobileDetect } from "@lib/useMobileDetect";
import { pictureSizes } from "@lib/constants";

type Props = {
  photos: PhotoType[];
};

export const Gallery = ({ photos }) => {
  const detect = useMobileDetect();

  const getPictureSize = () =>
    detect.isMobile() ? pictureSizes.mobile : pictureSizes.desktop;

  const customThumbRender = () => {
    return photos.map(({ src, alt }, index) => (
      <Picture key={index} src={src + "-thumb"} alt={alt} />
    ));
  };

  const customPrevRender = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <Button className="prev" onClick={onClickHandler} title={label}>
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

  const customNextRender = (onClickHandler, hasNext, label) =>
    hasNext && (
      <Button className="next" onClick={onClickHandler} title={label}>
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

  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      dynamicHeight={true}
      thumbWidth={100}
      transitionTime={175}
      renderArrowPrev={customPrevRender}
      renderArrowNext={customNextRender}
      renderThumbs={customThumbRender}
    >
      {photos.map(({ src, alt }, index) => (
        <Slide key={index}>
          <Picture src={`${src}-${getPictureSize()}`} alt={alt} />
        </Slide>
      ))}
    </Carousel>
  );
};

const Slide = styled(Box, {});

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

// export const Carousel = ({
//   photos,
//   options = { loop: false, skipSnaps: false },
// }: Props) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [mainViewport, embla] = useEmblaCarousel(options);
//   const [thumbViewport, emblaThumbs] = useEmblaCarousel({
//     containScroll: "keepSnaps",
//     dragFree: true,
//   });
//   const [prevEnabled, setPrevEnabled] = useState(false);
//   const [nextEnabled, setNextEnabled] = useState(false);

//   const thumbClick = useCallback(
//     (index) => {
//       if (!embla || !emblaThumbs) return;
//       if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
//     },
//     [embla, emblaThumbs]
//   );
//   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
//   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

//   const onSelect = useCallback(() => {
//     if (!embla || !emblaThumbs) return;

//     setSelectedIndex(embla.selectedScrollSnap());
//     emblaThumbs.scrollTo(embla.selectedScrollSnap());
//     setPrevEnabled(embla.canScrollPrev());
//     setNextEnabled(embla.canScrollNext());
//   }, [embla, emblaThumbs, setSelectedIndex]);

//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     embla.on("select", onSelect);
//   }, [embla, onSelect]);

//   const detect = useMobileDetect();

//   const getPictureSize = () =>
//     detect.isMobile() ? pictureSizes.mobile : pictureSizes.desktop;

//   return (
//     <Box>
//       <Embla>
//         <Viewport ref={mainViewport}>
//           <Container mode="flex">
//             {photos.map(({ src, alt }, index) => (
//               <Slide key={index}>
//                 <Picture src={`${src}-${getPictureSize()}`} alt={alt} />
//               </Slide>
//             ))}
//           </Container>
//         </Viewport>
//         <PrevButton onClick={scrollPrev} enabled={prevEnabled} />
//         <NextButton onClick={scrollNext} enabled={nextEnabled} />
//       </Embla>
//       <Embla className="thumbs" css={{ padding: "6px 0 6px 6px" }}>
//         <Viewport ref={thumbViewport}>
//           <Container mode="flex">
//             {photos.map(({ src, alt }, index) => (
//               <Thumb
//                 key={index}
//                 onClick={() => thumbClick(index)}
//                 selected={index === selectedIndex}
//                 src={src}
//                 alt={alt}
//               />
//             ))}
//           </Container>
//         </Viewport>
//       </Embla>
//     </Box>
//   );
// };

// const Embla = styled(Box, {
//   position: "relative",
//   width: "100%",
//   marginLeft: "auto",
//   marginRight: "auto",
// });

// const Viewport = styled(Box, {
//   overflow: "hidden",
//   width: "100%",
//   "&.is-draggable": {
//     cursor: "grab",
//   },
//   "&.is-dragging": {
//     cursor: "grabbing",
//   },
// });

// const Container = styled(Box, {
//   display: "flex",
//   userSelect: "none",
//   "-webkit-touch-callout": "none",
//   "-khtml-user-select": "none",
//   "-webkit-tap-tighlightColor": "transparent",
// });
