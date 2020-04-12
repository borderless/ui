import * as React from "react";
import {
  Badge,
  Box,
  BadgeBorder,
  BadgeInteractive,
  Card,
  CallOut,
  CallOutCard,
} from "../index";
import { mr, p, flexColumn, mb } from "@borderlesslabs/atoms";

export default {
  title: "Misc",
};

export const cards = () => (
  <Box css={flexColumn}>
    <Box css={mb[2]}>
      <CallOut css={p[3]}>Example</CallOut>
    </Box>
    <Box css={mb[2]}>
      <Card css={p[3]}>Example</Card>
    </Box>
    <Box css={mb[2]}>
      <CallOutCard css={p[3]}>Example</CallOutCard>
    </Box>
  </Box>
);

export const badges = () => (
  <Box css={flexColumn}>
    <Box css={mb[2]}>
      <Badge>Example</Badge>
    </Box>
    <Box css={mb[2]}>
      <BadgeBorder css={mr[2]}>Example</BadgeBorder>
      <BadgeBorder css={mr[2]}>Tag</BadgeBorder>
    </Box>
    <Box css={mb[2]}>
      <BadgeInteractive css={mr[2]}>Example</BadgeInteractive>
      <BadgeInteractive css={mr[2]}>Tag</BadgeInteractive>
    </Box>
  </Box>
);
