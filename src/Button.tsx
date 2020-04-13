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
  colorConfig,
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
  pseudoHover({
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
  }),
  pseudoActive({
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackgroundOffset})`,
  }),
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
  pseudoHover({
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactiveOffset})`,
  }),
  pseudoActive({
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactiveActive})`,
  }),
  pseudoDisabled({
    backgroundColor: `var(${themeVars.disabledOffset})`,
  }),
]);

export const ButtonMinimal = styled("button", Button.style, [
  { color: `var(${themeVars.interactive})` },
]);

export const ButtonOutline = styled("button", ButtonMinimal.style, [
  {
    borderColor: colorConfig.current,
  },
  border[1],
  pseudoDisabled({
    borderColor: `var(${themeVars.disabledOffset})`,
  }),
]);
