import { styled, css } from "react-free-style";
import {
  nest,
  borderColor,
  borderSolid,
  appearanceNone,
  rounded,
  outlineNone,
  fontSize,
  border,
  boxBorder,
  backgroundColor,
  leading,
  flexShrink0,
  inlineBlock,
  p,
  pseudoFocus,
  pseudoDisabled,
  pseudoPlaceholder,
  cursorNotAllowed,
  w,
  h,
  pseudoChecked,
} from "@borderlesslabs/atoms";
import { themeVars } from "./theme";

export const inputSmall = css(fontSize.s, p[1], h[8]);
export const inputStandard = css(fontSize.m, p[2], h[10]);
export const inputLarge = css(fontSize.l, p[3], h[12]);
export const inputXLarge = css(fontSize.xl, p[4], h[16]);

export const focusRing = css(
  pseudoFocus({
    boxShadow: `0 0 0 3px var(${themeVars.focusRing})`,
    $displayName: "focusRing",
  })
);

export const Input = styled("input", [
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
    borderColor: `var(${themeVars.uiOffset})`,
  },
  inputStandard,
  appearanceNone,
  boxBorder,
  rounded.sm,
  leading.normal,
  outlineNone,
  borderSolid,
  border[1],
  focusRing,
  pseudoFocus({ borderColor: `var(${themeVars.interactive})` }),
  pseudoPlaceholder({ color: `var(${themeVars.textPlaceholder})` }),
  pseudoDisabled(cursorNotAllowed, {
    color: `var(${themeVars.disabledText})`,
    borderColor: `var(${themeVars.disabledOffset})`,
    backgroundColor: `var(${themeVars.disabledBackground})`,
  }),
  nest("&[type=radio]", "radio")(
    { color: `var(${themeVars.interactive})` },
    borderColor.current,
    inlineBlock,
    p[0],
    flexShrink0,
    rounded.full,
    w.em,
    h.em,
    pseudoChecked(backgroundColor.current, {
      backgroundImage: `var(${themeVars.radioImage})`,
      backgroundSize: "100% 100%",
      $displayName: "radioImage",
    })
  ),
  nest("&[type=checkbox]", "checkbox")(
    { color: `var(${themeVars.interactive})` },
    borderColor.current,
    inlineBlock,
    p[0],
    flexShrink0,
    w.em,
    h.em,
    pseudoChecked(backgroundColor.current, {
      backgroundImage: `var(${themeVars.checkboxImage})`,
      backgroundSize: "100% 100%",
      $displayName: "checkboxImage",
    })
  ),
]);

export const Select = styled("select", [
  Input.style,
  nest(
    "&:not([multiple])",
    "not(multiple)"
  )({
    $displayName: "image",
    backgroundImage: `var(${themeVars.selectImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.5em center",
    backgroundSize: "1.5em 1.5em",
    paddingRight: "2.5em",
  }),
  nest("&[multiple]", "multiple")(h.auto),
]);

export const Textarea = styled("textarea", [Input.style, h.auto]);
