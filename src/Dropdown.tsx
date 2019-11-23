import { styled } from "react-free-style";
import {
  py,
  rounded,
  px,
  backgroundColor,
  color,
  pseudoHover,
  boxShadow
} from "@borderlesslabs/atoms";

export const Dropdown = styled("div", [
  py[2],
  rounded.lg,
  backgroundColor.white,
  boxShadow.s,
  color.gray8
]);

export const DropdownItem = styled("div", [
  py[2],
  px[4],
  pseudoHover(color.white, backgroundColor.indigo5)
]);
