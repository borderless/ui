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
  pseudoHover(backgroundColor.indigo7)
]);

export const buttonSecondary = css([
  color.gray9,
  backgroundColor.gray3,
  pseudoHover(backgroundColor.gray4)
]);

export const buttonOutline = css([
  color.indigo6,
  borderColor.indigo6,
  pseudoHover(color.white, backgroundColor.indigo6)
]);

export const buttonMinimal = css([color.indigo6, pseudoHover(color.indigo7)]);

export const buttonSuccess = css([
  color.white,
  backgroundColor.green6,
  pseudoHover(backgroundColor.green7)
]);

export const buttonWarning = css([
  color.white,
  backgroundColor.orange6,
  pseudoHover(backgroundColor.orange7)
]);

export const buttonDanger = css([
  color.white,
  backgroundColor.red6,
  pseudoHover(backgroundColor.red7)
]);

export const button = css([
  inputStandard,
  cursorPointer,
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  rounded.m,
  outlineNone,
  border[1],
  borderSolid,
  borderColor.transparent,
  backgroundColor.transparent,
  pseudoFocus({
    boxShadow: `0 0 0 3px ${colorConfig.indigo2}`
  }),
  pseudoDisabled(cursorNotAllowed, opacity50)
]);

export const Button = styled("button", button);
