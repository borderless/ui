import { styled, css } from "react-free-style";
import {
  colorConfig,
  backgroundColor,
  textLeft,
  p,
  fontWeight,
  borderTop,
  borderSolid,
  borderColor,
  border,
  borderCollapse,
  nest,
  pseudoFirstChild,
  borderLeft
} from "@borderlesslabs/atoms";

export const Table = styled("table", [borderCollapse]);

export const TableBody = styled("tbody");

export const TableHead = styled("thead", [backgroundColor.gray1]);

export const TableRow = styled("tr");

export const TableHeadCell = styled("th", [
  textLeft,
  fontWeight.semiBold,
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  borderColor.gray3
]);

export const TableCell = styled("td", [
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  borderColor.gray3
]);

const tableBorderedCellStyle = [
  border[1],
  borderSolid,
  borderColor.gray3,
  pseudoFirstChild(borderLeft[0])
];

export const tableBordered = css([
  border[1],
  borderSolid,
  borderColor.gray3,
  nest("td", "td")(tableBorderedCellStyle),
  nest("th", "th")(tableBorderedCellStyle)
]);
