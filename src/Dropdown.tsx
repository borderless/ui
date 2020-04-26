import { styled } from "react-free-style";
import { py, px, boxShadow, rounded } from "@borderlesslabs/atoms";
import { themeVars } from "./theme";
import { hover, active } from "./utilities";

export const Dropdown = styled("div", [
  {
    color: `var(${themeVars.uiText})`,
    backgroundColor: `var(${themeVars.ui})`,
  },
  py[2],
  boxShadow.s,
  rounded.m,
]);

export const DropdownItem = styled("div", [
  py[2],
  px[4],
  hover({
    backgroundColor: `var(${themeVars.uiOffset})`,
  }),
  active({
    backgroundColor: `var(${themeVars.uiActive})`,
  }),
]);
