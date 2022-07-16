import Link from "next/link";
import { styled, theme } from "@styles/stitches.config";

import Flex from "@components/Flex";

const InstagramIcon = styled("img", {
  width: 24,
  height: 24,
});

const Anchor = styled("a", {
  color: theme.colors.black,
  fontSize: 24,
  textTransform: "uppercase",
  textDecoration: "none",
});

const Navigation = () => {
  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      css={{ height: 166, paddingLeft: "$4" }}
    >
      <Flex direction="row" gap="xl">
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
  );
};

export default Navigation;
