/* eslint-disable import/prefer-default-export */
import * as React from "react";
import { CacheProvider } from "@emotion/react";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/900-normal.css";
import getEmotionCache from "./getEmotionCache";

const cache = getEmotionCache();

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};
