import Link from "next/link";
import { styled, theme } from "@styles/stitches.config";

import Box from "@components/Box";
import Logo from "@components/Logo";
import Hamburger from "@components/Hamburger";

const GridBox = styled(Box, {
  alignItems: "center",
  borderBottom: "1px solid $border",
  variants: {
    layout: {
      mobile: {
        gridTemplateColumns: "1fr",
        gridAutoFlow: "column",
        justifyContent: "space-between",
      },
      desktop: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
    padding: {
      compact: { padding: "0 $2" },
      comfortable: { padding: "0 $4" },
    },
  },
  defaultVariants: {
    layout: "mobile",
    padding: "compact",
  },
});

const SpacedBox = styled(Box, {
  variants: {
    gap: {
      s: { gap: "$1" },
      m: { gap: "$2" },
      l: { gap: "$3" },
      xl: { gap: "$4" },
    },
  },
});

const SpreadBox = styled(Box, {
  flexDirection: "row",
  alignItems: "center",
  variants: {
    spacing: {
      spread: { justifyContent: "space-between" },
      packed: { justifyContent: "end" },
    },
  },
});

const InstagramIcon = styled("img", {
  width: 24,
  height: 24,
  minWidth: 24,
  marginLeft: "$3",
});

const Anchor = styled("a", {
  position: "relative",
  color: theme.colors.black,
  fontSize: 21,
  textTransform: "uppercase",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Navigation = () => {
  return (
    <GridBox
      mode="grid"
      padding={{ "@m": "comfortable" }}
      layout={{ "@m": "desktop" }}
    >
      <Logo />
      <Box display={{ "@initial": "show", "@m": "hide" }}>
        <Hamburger />
      </Box>
      <SpreadBox
        mode="flex"
        display={{ "@initial": "hide", "@m": "show" }}
        spacing={{ "@initial": "packed", "@m": "spread" }}
      >
        <SpacedBox
          mode="flex"
          gap={{ "@initial": "l", "@lg": "xl" }}
          css={{
            flexDirection: "row",
          }}
        >
          <Link href="/work" passHref>
            <Anchor>Work</Anchor>
          </Link>
          <Link href="/about" passHref>
            <Anchor>About</Anchor>
          </Link>
          <Link href="/contact" passHref>
            <Anchor>Contact</Anchor>
          </Link>
        </SpacedBox>

        <Link href="https://www.instagram.com/onendstudio">
          <a>
            <InstagramIcon src="/instagram.svg" alt="Instagram" />
          </a>
        </Link>
      </SpreadBox>
    </GridBox>
  );
};

export default Navigation;
