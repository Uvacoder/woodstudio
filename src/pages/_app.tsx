import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { PageLayout } from "@components/PageLayout";

import "@styles/reset.css";
import "@styles/carousel.css";
import "@styles/fonts.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>);

  return getLayout(<Component {...pageProps} />);
}
