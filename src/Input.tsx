import { styled, css } from "react-free-style";
import {
  nest,
  borderColor,
  borderSolid,
  appearanceNone,
  px,
  rounded,
  outlineNone,
  fontSize,
  border,
  boxBorder,
  backgroundColor,
  py,
  leading,
  flexShrink0,
  inlineBlock,
  p,
  block,
  inlineFlex,
  itemsCenter,
  pseudoFocus,
  pseudoInvalid,
  pseudoDisabled,
  pseudoPlaceholder,
  cursorNotAllowed,
  w,
  h,
  pseudoChecked,
  opacity50
} from "@borderlesslabs/atoms";
import { theme } from "./theme";

export const inputSmall = css(fontSize.s, py[1], px[1], h[8]);
export const inputStandard = css(fontSize.m, py[2], px[2], h[10]);
export const inputLarge = css(fontSize.l, py[3], px[3], h[12]);
export const inputXLarge = css(fontSize.xl, py[4], px[4], h[16]);

export const Input = styled("input", [
  {
    color: `var(${theme.text1})`,
    backgroundColor: `var(${theme.field1})`
  },
  { fontFamily: "inherit" },
  inputStandard,
  appearanceNone,
  boxBorder,
  rounded.none,
  leading.normal,
  outlineNone,
  borderSolid,
  border[1],
  { borderColor: `var(${theme.ui2})` },
  pseudoFocus(
    { borderColor: `var(${theme.focus1})` },
    pseudoInvalid({ borderColor: `var(${theme.danger1})` })
  ),
  pseudoDisabled(cursorNotAllowed, opacity50),
  pseudoPlaceholder({ color: `var(${theme.placeholder1})` }),
  nest("&[type=radio]", "radio")(
    { color: `var(${theme.interactive1})` },
    borderColor.current,
    inlineBlock,
    p[0],
    flexShrink0,
    rounded.full,
    w.em,
    h.em,
    pseudoChecked(backgroundColor.current, {
      backgroundImage: `var(${theme.radioImage})`,
      backgroundSize: "100% 100%",
      $displayName: "radioImage"
    })
  ),
  nest("&[type=checkbox]", "checkbox")(
    { color: `var(${theme.interactive1})` },
    borderColor.current,
    inlineBlock,
    p[0],
    flexShrink0,
    w.em,
    h.em,
    pseudoChecked(backgroundColor.current, {
      backgroundImage: `var(${theme.checkboxImage})`,
      backgroundSize: "100% 100%",
      $displayName: "checkboxImage"
    })
  )
]);

export const Select = styled("select", [
  Input.style,
  nest("&:not([multiple])", "not(multiple)")({
    $displayName: "image",
    backgroundImage: `var(${theme.selectImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.5em center",
    backgroundSize: "1.5em 1.5em",
    paddingRight: "2.5em"
  }),
  nest("&[multiple]", "multiple")(h.auto)
]);

export const Textarea = styled("textarea", [Input.style, h.auto]);

export const Label = styled("label", [{ color: `var(${theme.text2})` }, block]);

export const InlineLabel = styled("label", [
  { color: `var(${theme.text2})` },
  inlineFlex,
  itemsCenter
]);

export const LabelText = styled("div", [{ color: `var(${theme.text2})` }]);
