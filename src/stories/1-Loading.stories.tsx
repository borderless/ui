import * as React from "react";
import { number } from "@storybook/addon-knobs";
import {
  floatLeft,
  w,
  h,
  mr,
  mb,
  inlineBlock,
  clearFix
} from "@borderlesslabs/atoms";
import { Spinner } from "../Spinner";
import { Box } from "../Box";
import { Paragraph } from "../Text";
import { LoadingText, loadingContent } from "../Placeholder";

export default {
  title: "Loading"
};

export const spinner = () => (
  <Spinner size={number("Size", 40)} width={number("Width", 2)} />
);

export const placeholder = () => (
  <Paragraph css={[clearFix]}>
    <Box
      css={[inlineBlock, floatLeft, w[12], h[12], mr[3], mb[3], loadingContent]}
    />
    <LoadingText css={[loadingContent, { width: "50%" }]} />
    <br />
    <LoadingText css={[loadingContent, { width: "20%" }]} />
    <br />
    <LoadingText css={[loadingContent, { width: "60%" }]} />
    <br />
    <LoadingText css={[loadingContent, { width: "30%" }]} />
  </Paragraph>
);
