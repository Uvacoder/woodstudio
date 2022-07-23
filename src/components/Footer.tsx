import Link from "next/link";
import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Avatar } from "@components/Logo";

import { styled } from "@styles/stitches.config";

const FlexBox = styled(Box, {
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid $border",
  variants: {
    padding: {
      compact: { padding: "$3 $2" },
      comfortable: { padding: "$4 $5" },
    },
  },
});

const Anchor = styled("a", {
  color: "$black",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
  },
});

export const Footer = () => {
  return (
    <FlexBox
      mode="flex"
      padding={{ "@initial": "compact", "@m": "comfortable" }}
    >
      <Box>
        <Text as="p" css={{ marginBottom: "$3" }}>
          contact
          <br />
          <Link href="mailto:hi@onend.studio" passHref>
            <Anchor>
              <Text>hi@onend.studio</Text>
            </Anchor>
          </Link>
        </Text>
        <Text as="p">
          instagram
          <br />
          <Link href="http://instagram.com/onendstudio" passHref>
            <Anchor>
              <Text>@onendstudio</Text>
            </Anchor>
          </Link>
        </Text>
      </Box>
      <Avatar size={{ "@initial": "small", "@m": "large" }} />
    </FlexBox>
  );
};
