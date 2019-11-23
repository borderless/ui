import { styled, css } from "react-free-style";
import {
  colorConfig,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  borderColor,
  borderSolid,
  rounded,
  boxBorder,
  color,
  backgroundColor,
  outlineNone,
  pseudoHover,
  border,
  pseudoDisabled,
  pseudoFocus,
  cursorNotAllowed,
  opacity50,
  cursorPointer
} from "@borderlesslabs/atoms";
import { inputStandard } from "./Input";

export const buttonPrimary = css([
  color.white,
  backgroundColor.indigo6,
  pseudoHover(backgroundColor.indigo7, borderColor.transparent)
]);

export const buttonOutline = css([
  color.indigo6,
  backgroundColor.transparent,
  borderColor.indigo6,
  pseudoHover(color.white, backgroundColor.indigo6, borderColor.transparent)
]);

export const buttonMinimal = css([
  color.indigo6,
  backgroundColor.transparent,
  borderColor.transparent,
  pseudoHover(color.indigo7, backgroundColor.transparent)
]);

export const buttonSuccess = css([
  color.white,
  backgroundColor.green6,
  pseudoHover(backgroundColor.green7)
]);

export const buttonDanger = css([
  color.white,
  backgroundColor.red6,
  pseudoHover(backgroundColor.red7)
]);

export const buttonWarning = css([
  color.white,
  backgroundColor.orange6,
  pseudoHover(backgroundColor.orange7)
]);

export const button = css([
  inputStandard,
  cursorPointer,
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  borderColor.transparent,
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
  pseudoDisabled(cursorNotAllowed, opacity50)
]);

export const Button = styled("button", button);
