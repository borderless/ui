import { styled } from "react-free-style";
import { py, px, pseudoHover, boxShadow } from "@borderlesslabs/atoms";
import { theme } from "./theme";

export const Dropdown = styled("div", [
  py[2],
  boxShadow.s,
  { color: `var(${theme.text1})`, backgroundColor: `var(${theme.ui1})` }
]);

export const DropdownItem = styled("div", [
  py[2],
  px[4],
  pseudoHover({
    backgroundColor: `var(${theme.uiHover1})`
  })
]);
