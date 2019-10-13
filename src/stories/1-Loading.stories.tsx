import * as React from "react";
import { number } from "@storybook/addon-knobs";
import { Spinner } from "../Spinner";
import { Box } from "../Box";
import { Paragraph } from "../Text";
import { FakeText, loadingContent } from "../Placeholder";
import { floatLeft, w, h, mr, mb, inlineBlock, clearFix } from "../css";

export default {
  title: "Spinner"
};

export const spinner = () => (
  <Spinner size={number("Size", 40)} width={number("Width", 4)} />
);

export const placeholder = () => (
  <Paragraph css={[clearFix]}>
    <Box
      css={[inlineBlock, floatLeft, w[12], h[12], mr[3], mb[3], loadingContent]}
    />
    <FakeText css={[loadingContent, { width: "50%" }]} />
    <br />
    <FakeText css={[loadingContent, { width: "20%" }]} />
    <br />
    <FakeText css={[loadingContent, { width: "60%" }]} />
    <br />
    <FakeText css={[loadingContent, { width: "30%" }]} />
  </Paragraph>
);
