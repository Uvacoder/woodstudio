import { globalCss } from "@stitches/react";
import "../../stiches.config";

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-light-webfont.woff2') format('woff2')",
      fontWeight: "300",
      fontStyle: "normal",
    },
    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-lightitalic-webfont.woff2') format('woff2')",
      fontWeight: "300",
      fontStyle: "italic",
    },

    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-regular-webfont.woff2') format('woff2')",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-italic-webfont.woff2') format('woff2')",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-medium-webfont.woff2') format('woff2')",
      fontWeight: "500",
      fontStyle: "normal",
    },
    {
      fontFamily: "Open Sauce Sans",
      src: "url('fonts/opensaucesans-mediumitalic-webfont.woff2') format('woff2')",
      fontWeight: "500",
      fontStyle: "italic",
    },
  ],
  "*": {
    boxSizing: "border-box",
    userSelect: "none",
    cursor: "default",
  },

  "html, body, button": {
    fontFamily: "$sauce"
  },

  "html, body": {
    padding: 0,
    margin: 0,
    height: "100%",
    color: "$black",
    fontSize: "18px",
    backgroundColor: "$tan",
  },
});
