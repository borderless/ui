import { styled } from "react-free-style";
import { themeVars } from "./theme";
import {
  rounded,
  alignMiddle,
  borderSolid,
  border,
  inlineBlock,
  py,
  px,
} from "@borderlesslabs/atoms";

export const Badge = styled("span", [
  {
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
  },
  inlineBlock,
  alignMiddle,
  px[2],
  py[1],
  rounded.sm,
]);

export const BadgeOutline = styled("span", Badge.style, [
  border[1],
  borderSolid,
  { borderColor: `var(${themeVars.uiBorder})` },
]);

export const BadgeInteractive = styled("span", Badge.style, [
  {
    color: `var(${themeVars.interactiveText})`,
    backgroundColor: `var(${themeVars.interactive})`,
  },
]);
