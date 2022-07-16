import Link from "next/link";
import { styled } from "@styles/stitches.config";

import Navigation from "@components/Navigation";
import Flex from "@components/Flex";

const LogoColumn = styled("a", {
  flex: 1,
});
const NavColumn = styled("div", {
  flex: 1,
  borderLeft: "1px solid $border",
});

const Header = () => {
  return (
    <Flex align="center" css={{ padding: "0 $4", height: 166 }}>
      <LogoColumn>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="On End Studio" style={{ width: 360 }} />
          </a>
        </Link>
      </LogoColumn>
      <NavColumn>
        <Navigation />
      </NavColumn>
    </Flex>
  );
};

export default Header;
