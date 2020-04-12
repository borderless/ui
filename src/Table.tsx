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
  borderLeft,
} from "@borderlesslabs/atoms";
import { themeVars } from "./theme";

export const Table = styled("table", [borderCollapse]);

export const TableBody = styled("tbody");

export const TableHead = styled("thead", [
  {
    color: `var(${themeVars.textUi})`,
    backgroundColor: `var(${themeVars.uiBackgroundOffset})`,
  },
]);

export const TableRow = styled("tr");

export const TableHeadCell = styled("th", [
  textLeft,
  fontWeight.semiBold,
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  { borderColor: `var(${themeVars.uiBorder})` },
]);

export const TableCell = styled("td", [
  p[2],
  border[0],
  borderTop[1],
  borderSolid,
  { borderColor: `var(${themeVars.uiBorder})` },
]);

const tableBorderedCellStyle = [
  border[1],
  borderSolid,
  { borderColor: `var(${themeVars.uiBorder})` },
  pseudoFirstChild(borderLeft[0]),
];

export const tableBordered = css(
  borderSolid,
  border[1],
  { borderColor: `var(${themeVars.uiBorder})` },
  nest("td", "td")(tableBorderedCellStyle),
  nest("th", "th")(tableBorderedCellStyle)
);
