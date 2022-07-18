import type { ReactElement, ReactNode } from "react";
import { isMobile } from "react-device-detect";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import DefaultLayout from "@components/DefaultLayout";

import "@styles/fonts.css";
import "@styles/reset.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, isMobile) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />, isMobile);
}
