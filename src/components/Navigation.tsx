import Link from "next/link";
import { styled, theme } from "@styles/stitches.config";

import Flex from "@components/Flex";
import Logo from "@components/Logo";
import Hamburger from "@components/Hamburger";

const InstagramIcon = styled("img", {
  width: 24,
  height: 24,
  minWidth: 24,
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

const Grid = styled("div", {
  display: "grid",
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

const Navigation = () => {
  return (
    <Grid padding={{ "@m": "comfortable" }} layout={{ "@m": "desktop" }}>
      <Logo />
      <Hamburger display={{ "@initial": "show", "@m": "hide" }} />
      <Flex
        display={{ "@initial": "hide", "@m": "show" }}
        direction="row"
        justify="between"
        align="center"
      >
        <Flex direction="row" gap={{ "@initial": "l", "@lg": "xl" }}>
          <Link href="/work" passHref>
            <Anchor>Work</Anchor>
          </Link>
          <Link href="/about" passHref>
            <Anchor>About</Anchor>
          </Link>
          <Link href="/contact" passHref>
            <Anchor>Contact</Anchor>
          </Link>
        </Flex>

        <Link href="https://www.instagram.com/onendstudio">
          <a>
            <InstagramIcon src="/instagram.svg" alt="Instagram" />
          </a>
        </Link>
      </Flex>
    </Grid>
  );
};

export default Navigation;
