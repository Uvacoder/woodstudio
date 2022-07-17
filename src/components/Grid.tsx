import { styled } from "@styles/stitches.config";

const Container = styled("div", {
  display: "grid",
  gridAutoFlow: "row",
  height: "100vh",
});

const Grid = ({
  rows = "1fr",
  columns = "1fr",
  gap = "0 0",
  areas = "",
  css = {},
  children,
}) => {
  return (
    <Container
      css={{
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas,
        gap,
        ...css,
      }}
    >
      {children}
    </Container>
  );
};

export default Grid;
