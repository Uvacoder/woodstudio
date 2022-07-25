import Link from "next/link";
import { styled } from "@styles/stitches.config";

import { routes } from "@lib/routes";

import { Box } from "@components/Box";
import { Logo } from "@components/Logos";
import { Hamburger } from "@components/Hamburger";
import { Text } from "@components/Text";

interface NavWithLogoProps {
  border?: boolean;
}

export const Navigation = () => {
  const links = routes.slice(0, -1).map(({ title, slug }) => {
    return (
      <Link href={slug} passHref>
        <Text as="a" size={{ "@initial": "3", "@l": "4" }} hover>
          {title}
        </Text>
      </Link>
    );
  });

  return (
    <>
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
          gap={{ "@initial": "l", "@l": "xl" }}
          css={{
            flexDirection: "row",
          }}
        >
          {links}
        </SpacedBox>

        <Link href={routes[routes.length - 1].slug}>
          <a>
            <InstagramIcon src="/instagram.svg" alt="Instagram" />
          </a>
        </Link>
      </SpreadBox>
    </>
  );
};

export const NavWithLogo = ({ border = false }: NavWithLogoProps) => {
  return (
    <GridBox
      mode="grid"
      padding={{ "@m": "comfortable" }}
      layout={{ "@m": "desktop" }}
      border={border}
    >
      <Link href="/">
        <a>
          <Logo
            size={{
              "@initial": "small",
              "@l": "large",
            }}
          />
        </a>
      </Link>
      <Navigation />
    </GridBox>
  );
};

const GridBox = styled(Box, {
  alignItems: "center",
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
      comfortable: { padding: "0 $5" },
    },
    border: {
      true: { borderBottom: "1px solid $black" },
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
      xl: { gap: "$5" },
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
