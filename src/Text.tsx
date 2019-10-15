import { styled } from "react-free-style";
import {
  leading,
  textColor,
  backgroundColor,
  rounded,
  px,
  inlineBlock
} from "./css";
import { fontConfig } from "./config";

export const Paragraph = styled("p", [leading.normal], "Paragraph");

export const Code = styled(
  "code",
  [
    inlineBlock,
    backgroundColor.gray1,
    textColor.indigo6,
    rounded.sm,
    px[1],
    {
      fontFamily: fontConfig.mono,
      whiteSpace: "nowrap",
      verticalAlign: "baseline"
    }
  ],
  "Code"
);
