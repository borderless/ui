import { styled } from "react-free-style";
import {
  inlineFlex,
  justifyCenter,
  itemsCenter,
  borderColor,
  borderSolid,
  boxBorder,
  outlineNone,
  border,
  cursorNotAllowed,
  cursorPointer,
  rounded,
  colorConfig,
  backgroundColor,
} from "@borderlesslabs/atoms";
import { inputStandard, focusRing } from "./Input";
import { themeVars } from "./theme";
import { hover, active, disabled } from "./utilities";

export const Button = styled("button", [
  {
    color: `var(${themeVars.uiText})`,
    backgroundColor: `var(${themeVars.ui})`,
  },
  inputStandard,
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  outlineNone,
  borderSolid,
  rounded.sm,
  border[0],
  focusRing,
  hover(cursorPointer, {
    color: `var(${themeVars.uiText})`,
    backgroundColor: `var(${themeVars.uiOffset})`,
  }),
  active({
    color: `var(${themeVars.uiText})`,
    backgroundColor: `var(${themeVars.uiActive})`,
  }),
  disabled(cursorNotAllowed, {
    color: `var(${themeVars.disabledText})`,
    backgroundColor: `var(${themeVars.disabledBackground})`,
  }),
]);

export const ButtonPrimary = styled("button", Button.style, [
  borderColor.transparent,
  {
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactive})`,
  },
  hover({
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactiveOffset})`,
  }),
  active({
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactiveActive})`,
  }),
  disabled({
    backgroundColor: `var(${themeVars.disabledOffset})`,
  }),
]);

export const ButtonMinimal = styled("button", Button.style, [
  backgroundColor.transparent,
]);

export const ButtonOutline = styled("button", Button.style, [
  {
    borderColor: colorConfig.current,
  },
  border[1],
  disabled({
    borderColor: `var(${themeVars.disabledOffset})`,
  }),
]);
