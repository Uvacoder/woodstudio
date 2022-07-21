import { useState } from "react";
import type * as Stitches from "@stitches/react";

import { styled } from "@styles/stitches.config";

type HamburgerVariants = Stitches.VariantProps<typeof Container>;

interface HamburgerProps {
  onChange?: (boolean) => {};
  display?: HamburgerVariants;
}

const Container = styled("div", {
  height: 32,
  width: 32,
  variants: {
    display: {
      hide: { display: "none" },
      show: { display: "auto" },
    },
  },
  defaultVariants: {
    display: "show",
  },
});
const lineStyles = {
  backgroundColor: "$border",
  height: 1.5,
  width: 24,
  borderRadius: 2,
  transition: "all 200ms ease",
};
const TopLine = styled("div", {
  ...lineStyles,
  variants: {
    position: {
      flat: { transform: "translate(4px, 10px) rotate(0)" },
      angled: { transform: "translate(4px, 16px) rotate(-135deg)" },
    },
  },
});
const BottomLine = styled("div", {
  ...lineStyles,

  variants: {
    position: {
      flat: { transform: "translate(4px, 20px) rotate(0)" },
      angled: { transform: "translate(4px, 14px) rotate(135deg)" },
    },
  },
});

const Hamburger = ({ onChange, display }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
    onChange(nextValue);
  };
  return (
    <Container onClick={handleClick} display={display}>
      <TopLine position={isOpen ? "angled" : "flat"} />
      <BottomLine position={isOpen ? "angled" : "flat"} />
    </Container>
  );
};

export default Hamburger;
