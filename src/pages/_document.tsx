import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, theme } from "@styles/stitches.config";

const FontPreload = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/opensaucesans-regular-webfont.woff2"
        crossOrigin="true"
        as="font"
      />
    </>
  );
};

const FaviconLinks = () => {
  return null;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <FontPreload />
          <FaviconLinks />
          <meta name="theme-color" content="#F3F1EF" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
