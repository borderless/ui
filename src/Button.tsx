import { styled, css } from "react-free-style";
import { colors, inputModifiers } from "./config";
import {
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
  textColor,
  backgroundColor,
  outlineNone
} from "./css";

export const primaryButton = css({
  ...textColor.white,
  ...backgroundColor.indigo6,
  [inputModifiers.hover]: {
    ...backgroundColor.indigo5
  },
  [inputModifiers.active]: {
    ...backgroundColor.indigo7
  }
});

export const outlinePrimaryButton = css({
  color: colors.indigo6,
  backgroundColor: "transparent",
  borderColor: colors.indigo6,
  [inputModifiers.hover]: {
    color: colors.white,
    backgroundColor: colors.indigo6
  },
  [inputModifiers.active]: {
    color: colors.white,
    borderColor: colors.indigo7,
    backgroundColor: colors.indigo7
  }
});

export const minimalButton = css({
  color: colors.indigo6,
  backgroundColor: "transparent",
  borderColor: "transparent",
  [inputModifiers.hover]: {
    color: colors.indigo5,
    backgroundColor: "transparent"
  },
  [inputModifiers.active]: {
    color: colors.indigo7,
    backgroundColor: "transparent"
  }
});

export const Button = styled("button", {
  ...boxBorder,
  ...inlineFlex,
  ...justifyCenter,
  ...itemsCenter,
  ...fontSize.m,
  ...borderSolid,
  ...borderColor.transparent,
  ...px[3],
  ...h[10],
  ...rounded.m,
  ...outlineNone,
  cursor: "pointer",
  color: colors.gray9,
  border: `1px solid transparent`,
  backgroundColor: colors.gray2,
  [inputModifiers.focus]: {
    boxShadow: `0 0 0 3px ${colors.indigo2}`
  },
  [inputModifiers.hover]: {
    backgroundColor: colors.gray3
  },
  [inputModifiers.active]: {
    backgroundColor: colors.gray4
  },
  [inputModifiers.disabled]: {
    cursor: "not-allowed",
    opacity: 0.5
  }
});
