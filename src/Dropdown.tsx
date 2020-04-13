import { styled } from "react-free-style";
import { py, px, pseudoHover, boxShadow, rounded } from "@borderlesslabs/atoms";
import { themeVars } from "./theme";

export const Dropdown = styled("div", [
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.uiBackground})`,
  },
  py[2],
  boxShadow.s,
  rounded.m,
]);

export const DropdownItem = styled("div", [
  py[2],
  px[4],
  pseudoHover({
    backgroundColor: `var(${themeVars.uiBackgroundOffset})`,
  }),
]);
