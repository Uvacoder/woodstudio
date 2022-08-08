import { useState } from "react";
import Link from "next/link";
import { styled } from "@styles/stitches.config";

import { routes } from "@lib/constants";

import { Box } from "@components/Box";
import { Text } from "@components/Text";

interface HamburgerProps {
  onChange?: (boolean) => void;
}

const ROW_HEIGHT = 40;

export const Hamburger = ({ onChange = () => {} }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
    onChange(nextValue);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const links = routes.map(({ title, slug }, i) => {
    return (
      <Link key={i} href={slug} passHref>
        <LinkRow onClick={handleClose}>
          <Text as="a" size="3">
            {title}
          </Text>
        </LinkRow>
      </Link>
    );
  });

  return (
    <>
      <Container onClick={handleClick}>
        <TopLine position={isOpen ? "angled" : "flat"} />
        <BottomLine position={isOpen ? "angled" : "flat"} />
      </Container>
      <LinkBox css={{ maxHeight: isOpen ? ROW_HEIGHT * links.length : 0 }}>
        {links}
      </LinkBox>
    </>
  );
};

const Container = styled("div", {
  height: 35,
  width: 35,
});

const lineStyles = {
  backgroundColor: "$border",
  height: 1,
  borderRadius: 2,
  transition: "all 200ms ease",
  willChange: "transform",
};

const TopLine = styled("div", {
  ...lineStyles,
  variants: {
    position: {
      flat: { width: 35, transform: "translate(0px, 13px) rotate(0)" },
      angled: { width: 24, transform: "translate(6px, 17px) rotate(-135deg)" },
    },
  },
});

const BottomLine = styled("div", {
  ...lineStyles,

  variants: {
    position: {
      flat: { width: 35, transform: "translate(0px, 21px) rotate(0)" },
      angled: { width: 24, transform: "translate(6px, 16px) rotate(135deg)" },
    },
  },
});

const LinkBox = styled(Box, {
  position: "absolute",
  top: 64,
  left: 0,
  right: 0,
  zIndex: 1,
  backgroundColor: "$tan",
  overflow: "hidden",
  transition: "all 200ms ease",
  willChange: "auto",
  userSelect: "none",
});

const LinkRow = styled(Box, {
  minHeight: ROW_HEIGHT,
  padding: "0 $2",
  alignItems: "center",
  borderBottom: "1px solid $border",
  defaultVariants: {
    mode: "flex",
  },
  "&:hover": {
    backgroundColor: "white",
  },
});
