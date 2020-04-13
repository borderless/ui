import React from "react";
import {
  floatLeft,
  w,
  h,
  mr,
  mb,
  inlineBlock,
  clearFix,
  Spinner,
  Box,
  Paragraph,
  LoadingText,
  loadingStyle,
} from "../index";

export default {
  title: "Loading",
};

export const spinner = () => <Spinner />;

export const placeholder = () => (
  <Paragraph css={[clearFix]}>
    <Box
      css={[inlineBlock, floatLeft, w[12], h[12], mr[3], mb[3], loadingStyle]}
    />
    <LoadingText css={[loadingStyle, { width: "50%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "20%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "60%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "30%" }]} />
  </Paragraph>
);
