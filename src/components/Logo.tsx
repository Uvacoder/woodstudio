import Link from "next/link";

import GridItem from "@components/GridItem";

const Logo = () => {
  return (
    <GridItem as="brand" align="center" css={{ padding: "0 $4" }}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="On End Studio" style={{ width: 360 }} />
        </a>
      </Link>
    </GridItem>
  );
};

export default Logo;
