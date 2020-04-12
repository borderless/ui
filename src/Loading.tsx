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
} from "@borderlesslabs/atoms";
import { animationName } from "./utilities";
import { themeVars } from "./theme";

export const loadingStyle = css(
  animationName({
    $displayName: "backgroundFade",
    "0%": {
      backgroundColor: `var(${themeVars.text})`,
    },
    "100%": {
      backgroundColor: `var(${themeVars.background})`,
    },
  }),
  {
    $displayName: "placeholderAnimation",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate",
    backgroundColor: `var(${themeVars.text})`,
  },
  cursorDefault,
  color.transparent,
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
