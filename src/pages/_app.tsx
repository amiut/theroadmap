import { FC } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/tailwind.sass";
import "../styles/app.sass";

const CustomApp: FC<AppProps> = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default CustomApp;
