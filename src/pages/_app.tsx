import { FC } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";

const CustomApp: FC<AppProps> = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default CustomApp;
