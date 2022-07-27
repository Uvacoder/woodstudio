import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@styles/stitches.config";

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
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
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
