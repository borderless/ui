import { styled, css } from "react-free-style";
import {
  textLeft,
  p,
  fontWeight,
  borderTop,
  borderSolid,
  border,
  borderCollapse,
  nest,
  pseudoFirstChild,
  borderLeft
} from "@borderlesslabs/atoms";
import { theme } from "./theme";

export const Table = styled("table", [borderCollapse]);

export const TableBody = styled("tbody");

export const TableHead = styled("thead", [
  {
    color: `var(${theme.text2})`,
    backgroundColor: `var(${theme.ui1})`
  }
]);

export const TableRow = styled("tr");

export const TableHeadCell = styled("th", [
  textLeft,
  fontWeight.semiBold,
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  { borderColor: `var(${theme.ui2})` }
]);

export const TableCell = styled("td", [
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  { borderColor: `var(${theme.ui2})` }
]);

const tableBorderedCellStyle = [
  border[1],
  borderSolid,
  { borderColor: `var(${theme.ui2})` },
  pseudoFirstChild(borderLeft[0])
];

export const tableBordered = css(
  border[1],
  borderSolid,
  { borderColor: `var(${theme.ui2})` },
  nest("td", "td")(tableBorderedCellStyle),
  nest("th", "th")(tableBorderedCellStyle)
);
