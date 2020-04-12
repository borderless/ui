import * as React from "react";
import {
  Badge,
  Box,
  BadgeOutline,
  BadgeInteractive,
  Card,
  CallOut,
  CallOutCard,
  Progress,
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
      <BadgeOutline css={mr[2]}>Example</BadgeOutline>
      <BadgeOutline css={mr[2]}>Tag</BadgeOutline>
    </Box>
    <Box css={mb[2]}>
      <BadgeInteractive css={mr[2]}>Example</BadgeInteractive>
      <BadgeInteractive css={mr[2]}>Tag</BadgeInteractive>
    </Box>
  </Box>
);

export const progress = () => (
  <Box css={flexColumn}>
    <Box css={mb[2]}>
      <Progress />
    </Box>

    <Box css={mb[2]}>
      <Progress value={80} max={100} />
    </Box>
  </Box>
);
