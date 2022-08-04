import type { ReactNode } from "react";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";

interface LayoutProps {
  children?: ReactNode;
}

export const ProjectLayout = ({ children }: LayoutProps) => {
  return (
    <ProjectBox padding={{ "@initial": "compact", "@m": "comfortable" }}>
      {children}
    </ProjectBox>
  );
};

const ProjectBox = styled(Box, {
  variants: {
    padding: {
      compact: { padding: "$3 $2" },
      comfortable: { padding: "$4 $4" },
    },
  },
});
