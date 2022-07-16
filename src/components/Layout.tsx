import { theme } from "@styles/stitches.config";

import Flex from "@components/Flex";
import Header from "@components/Header";

const PageLayout = ({ children }) => {
  return (
    <Flex
      as="section"
      direction="column"
      css={{
        minHeight: "100%",
        fontFamily: theme.fonts.primary,
        backgroundColor: theme.colors.siteBg,
      }}
    >
      <>
        <Header />
        {children}
      </>
    </Flex>
  );
};
export default PageLayout;
