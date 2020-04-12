import { styled } from "react-free-style";
import { themeVars } from "./theme";
import {
  borderSolid,
  borderLeft,
  border,
  rounded,
} from "@borderlesslabs/atoms";

export const Card = styled("div", [
  rounded.m,
  {
    backgroundColor: `var(${themeVars.uiBackground})`,
  },
]);

export const CallOut = styled("div", [
  borderSolid,
  border[0],
  borderLeft[2],
  {
    borderColor: `var(${themeVars.uiOffset})`,
  },
]);

export const CallOutCard = styled("div", Card.style, CallOut.style, [
  rounded.none,
]);
