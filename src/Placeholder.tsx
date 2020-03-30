import { styled, css } from "react-free-style";
import {
  leading,
  color,
  inlineBlock,
  selectNone,
  pointerEventsNone,
  h,
  pseudoAfter,
  cursorDefault
} from "@borderlesslabs/atoms";
import { animationName } from "./utilities";
import { theme } from "./theme";

export const loadingContent = css(
  animationName({
    $displayName: "backgroundFade",
    "0%": {
      backgroundColor: `var(${theme.uiHover1})`
    },
    "100%": {
      backgroundColor: `var(${theme.uiActive1})`
    }
  }),
  {
    $displayName: "placeholderAnimation",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate",
    backgroundColor: `var(${theme.uiHover1})`
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
    display: "inline-block"
  })
]);
