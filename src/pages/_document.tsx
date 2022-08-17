import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@styles/stitches.config";

const FontPreload = () => {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preload"
        href="/fonts/opensaucesans-regular-webfont.woff2"
        crossOrigin="true"
        as="font"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
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
          <meta name="theme-color" content="#f3f1ef" />
          <meta
            name="description"
            content="Justin Belcher is a designer and furniture maker based out of San Francisco, 
            California. His work focuses on unexpected forms grounded in a modern Nordic 
            vernacular."
          />
          <meta property="og:title" content="On End Studio" />
          <meta
            property="og:description"
            content="Justin Belcher is a designer and furniture maker based out of San Francisco, 
            California."
          />
          <meta
            property="og:image"
            content="https://onend.studio/photos/coffeetable-front-640w.jpg"
          />
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
