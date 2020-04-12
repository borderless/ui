import { styled } from "react-free-style";
import {
  leading,
  px,
  inlineBlock,
  whitespaceNoWrap,
  alignBaseline,
  pseudoHover,
  rounded,
  block,
  inlineFlex,
  itemsCenter,
  border,
  borderTop,
  borderSolid,
} from "@borderlesslabs/atoms";
import { themeVars } from "./theme";

export const fontSans =
  "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
export const fontSerif = "Georgia,Cambria,Times New Roman,Times,serif";
export const fontMono =
  "Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace";

export const Paragraph = styled("p", [leading.normal]);

export const Code = styled("code", [
  inlineBlock,
  px[1],
  whitespaceNoWrap,
  alignBaseline,
  rounded.sm,
  { fontFamily: fontMono },
  {
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
  },
]);

export const Link = styled("a", [
  { color: `var(${themeVars.interactive})` },
  { textDecoration: "none" },
  pseudoHover({ textDecoration: "underline" }),
]);

export const Label = styled("label", [block]);

export const InlineLabel = styled("label", [inlineFlex, itemsCenter]);

export const LabelText = styled("div");

export const HelpText = styled("div", [{ color: `var(${themeVars.textUi})` }]);

export const Divider = styled("hr", [
  borderSolid,
  border[0],
  borderTop[1],
  { borderColor: `var(${themeVars.uiBorder})` },
]);
