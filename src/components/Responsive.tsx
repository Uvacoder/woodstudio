import React from "react";
import { styled, config } from "@styles/stitches.config";

type QueryKeys = `@${keyof typeof config.media}`;

export interface MatchProps {
  query: QueryKeys;
  children: React.ReactNode;
}

const ResponsiveBox = styled("div", {
  variants: {
    display: {
      hide: { display: "none" },
      show: { display: "auto" },
    },
  },
});

export const ShowIfMatch = ({ query, children }: MatchProps) => (
  <Box display={{ [query]: "show" }}>{children}</Box>
);

export const HideIfMatch = ({ query, children }: MatchProps) => (
  <Box display={{ [query]: "hide" }}>{children}</Box>
);
