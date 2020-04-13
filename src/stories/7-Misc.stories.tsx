import React from "react";
import {
  mr,
  p,
  flexColumn,
  mb,
  Badge,
  Box,
  BadgeOutline,
  BadgeInteractive,
  Outline,
  Card,
  CardOutline,
  CallOut,
  CallOutCard,
  Progress,
  Strong,
} from "../index";

export default {
  title: "Misc",
};

export const cards = () => (
  <Box css={flexColumn}>
    <Box css={mb[2]}>
      <Outline css={p[3]}>
        <Strong>Outline.</Strong> Some text here.
      </Outline>
    </Box>
    <Box css={mb[2]}>
      <Card css={p[3]}>
        <Strong>Card.</Strong> Some text here.
      </Card>
    </Box>
    <Box css={mb[2]}>
      <CardOutline css={p[3]}>
        <Strong>Card Outline.</Strong> Some text here.
      </CardOutline>
    </Box>
    <Box css={mb[2]}>
      <CallOut css={p[3]}>
        <Strong>Call Out.</Strong> Some text here.
      </CallOut>
    </Box>
    <Box css={mb[2]}>
      <CallOutCard css={p[3]}>
        <Strong>Call Out Card.</Strong> Some text here.
      </CallOutCard>
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
