import { styled } from "react-free-style";
import { themeVars } from "./theme";
import {
  borderSolid,
  borderLeft,
  border,
  rounded,
} from "@borderlesslabs/atoms";

export const Outline = styled("div", [
  borderSolid,
  border[1],
  rounded.m,
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.background})`,
    borderColor: `var(${themeVars.uiBorder})`,
  },
]);

export const Card = styled("div", [
  rounded.m,
  {
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
  },
]);

export const CardOutline = styled("div", Card.style, [
  borderSolid,
  border[1],
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.background})`,
    borderColor: `var(${themeVars.uiBorder})`,
  },
]);

export const CallOut = styled("div", [
  borderSolid,
  border[0],
  borderLeft[4],
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.background})`,
    borderColor: `var(${themeVars.uiBorder})`,
  },
]);

export const CallOutCard = styled("div", Card.style, CallOut.style, [
  rounded.none,
]);
