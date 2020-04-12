import { styled } from "react-free-style";
import {
  inlineFlex,
  justifyCenter,
  itemsCenter,
  borderColor,
  borderSolid,
  boxBorder,
  outlineNone,
  pseudoHover,
  border,
  pseudoDisabled,
  cursorNotAllowed,
  cursorPointer,
  pseudoActive,
  rounded,
  backgroundColor,
} from "@borderlesslabs/atoms";
import { inputStandard, focusRing } from "./Input";
import { themeVars } from "./theme";

export const Button = styled("button", [
  { color: `var(${themeVars.text})` },
  inputStandard,
  cursorPointer,
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  outlineNone,
  borderSolid,
  rounded.sm,
  border[0],
  backgroundColor.transparent,
  focusRing,
  pseudoHover({ backgroundColor: `var(${themeVars.uiBackground})` }),
  pseudoActive({ backgroundColor: `var(${themeVars.uiBackgroundOffset})` }),
  pseudoDisabled(cursorNotAllowed, {
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
  pseudoHover({ backgroundColor: `var(${themeVars.interactiveOffset})` }),
  pseudoActive({ backgroundColor: `var(${themeVars.interactiveActive})` }),
  pseudoDisabled({
    backgroundColor: `var(${themeVars.disabledOffset})`,
  }),
]);

export const ButtonMinimal = styled("button", Button.style, [
  { color: `var(${themeVars.interactive})` },
  pseudoHover({
    color: `var(${themeVars.textUi})`,
  }),
  pseudoActive({
    color: `var(${themeVars.textUi})`,
  }),
]);

export const ButtonOutline = styled("button", ButtonMinimal.style, [
  {
    color: `var(${themeVars.interactive})`,
    borderColor: `var(${themeVars.interactive})`,
  },
  border[1],
  pseudoDisabled({
    borderColor: `var(${themeVars.disabledOffset})`,
  }),
]);
