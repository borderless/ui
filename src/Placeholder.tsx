import { styled, css } from "react-free-style";
import {
  leading,
  color,
  colorConfig,
  inlineBlock,
  backgroundFixed,
  selectNone,
  h,
  pseudoAfter,
  cursorDefault
} from "@borderlesslabs/atoms";
import { animationName } from "./utilities";

export const loadingContent = css([
  animationName({
    $displayName: "backgroundSlide",
    "0%": {
      backgroundPosition: "-2000px 0"
    },
    "100%": {
      backgroundPosition: "2000px 0"
    }
  }),
  {
    $displayName: "slideAnimation",
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    background: [
      colorConfig.gray2,
      `linear-gradient(to right, ${colorConfig.gray2} 80px, ${colorConfig.gray4} 180px, ${colorConfig.gray2} 330px)`
    ],
    backgroundSize: "2000px 100%"
  },
  cursorDefault,
  color.transparent,
  selectNone,
  backgroundFixed
]);

export const FakeText = styled("span", [
  inlineBlock,
  leading.none,
  h.em,
  pseudoAfter({
    content: '""',
    display: "inline-block"
  })
]);
