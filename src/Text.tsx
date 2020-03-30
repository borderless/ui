import { styled } from "react-free-style";
import {
  leading,
  px,
  inlineBlock,
  whitespaceNoWrap,
  alignBaseline,
  pseudoHover
} from "@borderlesslabs/atoms";
import { theme } from "./theme";

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
  { fontFamily: fontMono },
  {
    color: `var(${theme.text2})`,
    backgroundColor: `var(${theme.ui2})`
  }
]);

export const Link = styled("a", [
  { color: `var(${theme.link1})` },
  { textDecoration: "none" },
  pseudoHover({ textDecoration: "underline" })
]);
