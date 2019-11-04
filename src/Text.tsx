import { styled } from "react-free-style";
import {
  leading,
  color,
  backgroundColor,
  rounded,
  px,
  inlineBlock,
  whitespaceNoWrap,
  alignBaseline
} from "@borderlesslabs/atoms";

export const fontSans =
  'system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
export const fontSerif = 'Georgia, Cambria, "Times New Roman", Times, serif';
export const fontMono =
  'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const Paragraph = styled("p", [leading.normal]);

export const Code = styled("code", [
  inlineBlock,
  backgroundColor.gray1,
  color.indigo6,
  rounded.sm,
  px[1],
  whitespaceNoWrap,
  alignBaseline,
  { fontFamily: fontMono }
]);
