import { styled } from "@styles/stitches.config";

const Container = styled("div", {});

const GridItem = ({ as = "", align = "start", css = {}, children = null }) => {
  return (
    <Container
      css={{
        gridArea: as,
        alignSelf: align,
        ...css,
      }}
    >
      {children}
    </Container>
  );
};

export default GridItem;
