import { styled, css } from "react-free-style";
import {
  leading,
  textColor,
  inlineBlock,
  backgroundFixed,
  selectNone
} from "./css";
import { colors } from "./config";
import { animationName } from "./utilities";

export const loadingContent = css([
  animationName({
    "0%": {
      backgroundPosition: "-2000px 0"
    },
    "100%": {
      backgroundPosition: "2000px 0"
    }
  }),
  {
    cursor: "default",
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    background: [
      colors.gray2,
      `linear-gradient(to right, ${colors.gray2} 80px, ${colors.gray4} 180px, ${colors.gray2} 330px)`
    ],
    backgroundSize: "2000px 100%"
  },
  textColor.transparent,
  selectNone,
  backgroundFixed
]);

export const FakeText = styled("span", [
  inlineBlock,
  leading.none,
  { height: "1em" },
  {
    "&:after": {
      content: '""',
      display: "inline-block"
    }
  }
]);
