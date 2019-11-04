import { styled, css } from "react-free-style";
import {
  colorConfig,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  fontSize,
  borderColor,
  borderSolid,
  px,
  h,
  rounded,
  boxBorder,
  color,
  backgroundColor,
  outlineNone,
  pseudoHover,
  pseudoActive,
  border,
  pseudoDisabled,
  pseudoFocus,
  cursorNotAllowed,
  opacity50
} from "@borderlesslabs/atoms";

export const primaryButton = css([
  color.white,
  backgroundColor.indigo6,
  pseudoHover(backgroundColor.indigo5),
  pseudoActive(backgroundColor.indigo7)
]);

export const outlinePrimaryButton = css([
  color.indigo6,
  backgroundColor.transparent,
  border[1],
  borderSolid,
  borderColor.indigo6,
  pseudoHover(color.white, backgroundColor.indigo6),
  pseudoActive(color.white, borderColor.indigo7, backgroundColor.indigo7)
]);

export const minimalButton = css([
  color.indigo6,
  backgroundColor.transparent,
  borderColor.transparent,
  pseudoHover(color.indigo6, backgroundColor.transparent),
  pseudoActive(color.indigo7, backgroundColor.transparent)
]);

export const Button = styled("button", [
  { cursor: "pointer" },
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  fontSize.m,
  borderSolid,
  borderColor.transparent,
  px[3],
  h[10],
  rounded.m,
  outlineNone,
  color.gray9,
  border[1],
  borderSolid,
  borderColor.transparent,
  backgroundColor.gray2,
  pseudoFocus({
    boxShadow: `0 0 0 3px ${colorConfig.indigo2}`
  }),
  pseudoHover(backgroundColor.gray3),
  pseudoActive(backgroundColor.gray4),
  pseudoDisabled(cursorNotAllowed, opacity50)
]);
