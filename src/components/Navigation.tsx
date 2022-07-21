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
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  alignItems: "center",
  borderBottom: "1px solid $border",
  variants: {
    padding: {
      narrow: { padding: "0 $2" },
      wide: { padding: "0 $4" },
    },
  },
});

const Navigation = () => {
  return (
    <Grid padding={{ "@initial": "narrow", "@s": "wide" }}>
      <Logo />
      <Hamburger />
      {/* <Flex direction="row" justify="between" align="center">
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
      </Flex> */}
    </Grid>
  );
};

export default Navigation;
