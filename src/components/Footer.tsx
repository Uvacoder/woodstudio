import Link from "next/link";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Avatar } from "@components/Logos";

interface FooterProps {
  border?: boolean;
}

export const Footer = ({ border = false }: FooterProps) => {
  return (
    <FlexBox
      mode="flex"
      padding={{ "@initial": "compact", "@m": "comfortable" }}
      border={border}
    >
      <Box>
        <Text as="p" size="3" css={{ marginBottom: "$2" }}>
          contact
          <br />
          <Link href="mailto:hi@onend.studio" passHref>
            <Text as="a" size="3" decoration="underline" hover>
              hi@onend.studio
            </Text>
          </Link>
        </Text>
        <Text as="p" size="3">
          instagram
          <br />
          <Link href="http://instagram.com/onendstudio" passHref>
            <Text as="a" size="3" decoration="underline" hover>
              @onendstudio
            </Text>
          </Link>
        </Text>
      </Box>
      <Avatar size={{ "@initial": "small", "@m": "large" }} />
    </FlexBox>
  );
};

const FlexBox = styled(Box, {
  alignItems: "center",
  justifyContent: "space-between",

  variants: {
    padding: {
      compact: { padding: "$3 $2" },
      comfortable: { padding: "$4 $5" },
    },
    border: {
      true: { borderTop: "1px solid $border" },
    },
  },
});
