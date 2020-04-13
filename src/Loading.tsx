import { styled, css } from "react-free-style";
import {
  leading,
  color,
  inlineBlock,
  selectNone,
  pointerEventsNone,
  h,
  pseudoAfter,
  cursorDefault,
  colorConfig,
  borderColor,
} from "@borderlesslabs/atoms";
import { animationName } from "./utilities";
import { themeVars } from "./theme";

export const loadingStyle = css(
  animationName({
    $displayName: "backgroundFade",
    "0%": {
      backgroundColor: colorConfig.transparent,
    },
    "100%": {
      backgroundColor: `var(${themeVars.textUi})`,
    },
  }),
  {
    $displayName: "placeholderAnimation",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate",
    backgroundColor: `var(${themeVars.textUi})`,
  },
  cursorDefault,
  color.transparent,
  borderColor.transparent,
  selectNone,
  pointerEventsNone
);

export const LoadingText = styled("span", [
  inlineBlock,
  leading.none,
  h.em,
  pseudoAfter({
    content: '""',
    display: "inline-block",
  }),
]);
