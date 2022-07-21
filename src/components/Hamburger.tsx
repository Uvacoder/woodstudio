import { styled } from "@styles/stitches.config";

const Container = styled("div", {
  backgroundColor: "red",
  height: 32,
  width: 32,
});
const lineStyles = {
  backgroundColor: "$border",
  height: 1.5,
  width: 24,
};
const TopLine = styled("div", {
  ...lineStyles,
  variants: {
    position: {
      flat: { transform: "translate(4px, 10px) rotate(0)" },
      angled: { transform: "translate(4px, 16px) rotate(45deg)" },
    },
  },
});
const BottomLine = styled("div", {
  ...lineStyles,

  variants: {
    position: {
      flat: { transform: "translate(4px, 20px) rotate(0)" },
      angled: { transform: "translate(4px, 14px) rotate(-45deg)" },
    },
  },
});

const Hamburger = ({ isOpen = true }) => (
  <Container>
    <TopLine position={isOpen ? "angled" : "flat"} />
    <BottomLine position={isOpen ? "angled" : "flat"} />
  </Container>
);

export default Hamburger;
