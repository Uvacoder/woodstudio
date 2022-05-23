import { styled } from "../../stiches.config";
import Link from "next/link";

const Wrapper = styled("div", {
  padding: "24px 0",
});
const Logo = styled("img", {
  display: "inline-block",
  height: 60,
});

const Nav = () => (
  <Wrapper>
    <Link href="/">
      <a>
        <Logo src="/images/logo_horizontal.svg" alt="On End Studio" />
      </a>
    </Link>
  </Wrapper>
);

export default Nav;
