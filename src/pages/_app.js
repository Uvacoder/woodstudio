import Head from "next/head";
import { globalCss } from "../../stiches.config";

const MyApp = ({ Component, pageProps }) => {
  globalCss({
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
    },

    "html, body, button": {
      fontFamily: "$sauce",
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
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
