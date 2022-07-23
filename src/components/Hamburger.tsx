import { useState } from "react";
import { styled } from "@styles/stitches.config";

interface HamburgerProps {
  onChange?: (boolean) => void;
}

export const Hamburger = ({ onChange = () => {} }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
    onChange(nextValue);
  };

  return (
    <Container onClick={handleClick}>
      <TopLine position={isOpen ? "angled" : "flat"} />
      <BottomLine position={isOpen ? "angled" : "flat"} />
    </Container>
  );
};

const Container = styled("div", {
  height: 32,
  width: 32,
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
