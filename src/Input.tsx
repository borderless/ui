import { styled, join } from "react-free-style";
import { colors, inputModifiers } from "./config";
import {
  borderColor,
  borderSolid,
  appearanceNone,
  px,
  rounded,
  outlineNone,
  fontSize,
  border,
  boxBorder,
  textColor,
  backgroundColor,
  py,
  leading,
  flexShrink0,
  inlineBlock,
  p,
  block,
  inlineFlex,
  itemsCenter,
  pr
} from "./css";

export const Input = styled("input", {
  ...appearanceNone,
  ...boxBorder,
  ...leading.normal,
  ...py[2],
  ...px[3],
  ...rounded.m,
  ...outlineNone,
  ...fontSize.m,
  ...borderSolid,
  ...border[1],
  ...borderColor.gray3,
  [inputModifiers.focus]: {
    ...borderColor.indigo6,
    boxShadow: `0 0 0 3px ${colors.indigo2}`
  },
  [inputModifiers.disabled]: {
    ...backgroundColor.gray1,
    cursor: "not-allowed"
  },
  [inputModifiers.placeholder]: {
    ...textColor.gray5
  },
  "&[type=radio]": {
    ...inlineBlock,
    ...p[0],
    ...textColor.indigo6,
    ...flexShrink0,
    ...rounded.full,
    width: "1em",
    height: "1em",
    "&:checked": {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
      ...borderColor.transparent,
      backgroundColor: "currentColor",
      backgroundSize: "100% 100%"
    }
  },
  "&[type=checkbox]": {
    ...inlineBlock,
    ...p[0],
    ...textColor.indigo6,
    ...flexShrink0,
    ...rounded.m,
    width: "1em",
    height: "1em",
    "&:checked": {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      ...borderColor.transparent,
      backgroundColor: "currentColor",
      backgroundSize: "100% 100%"
    }
  }
});

export const Select = styled(
  "select",
  join(Input.style, {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundColor: colors.white,
    backgroundPosition: `right 0.5em center`,
    backgroundSize: `1.5em 1.5em`,
    paddingRight: "2.5em",
    "&[multiple]": {
      backgroundImage: "none",
      ...pr[3]
    }
  })
);

export const Label = styled(
  "label",
  {
    ...block
  },
  "Label"
);

export const InlineLabel = styled(
  "label",
  {
    ...inlineFlex,
    ...itemsCenter
  },
  "InlineLabel"
);

export const LabelText = styled(
  "div",
  {
    ...textColor.gray8
  },
  "LabelText"
);
