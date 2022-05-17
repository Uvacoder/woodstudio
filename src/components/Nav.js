import { styled } from "../../stiches.config";

const Wrapper = styled("div", {});
const Logo = styled("img", {});

const Nav = () => (
  <Wrapper>
    <Logo src="/logo_horizontal.svg" alt="On End Studio" />
  </Wrapper>
);

export default Nav;
