import { styled, css } from "react-free-style";
import { colors, spacingConfig, fontWeightConfig } from "./config";

export const Table = styled(
  "table",
  {
    borderCollapse: "collapse"
  },
  "Table"
);

export const TableBody = styled("tbody", undefined, "TableBody");

export const TableHead = styled(
  "thead",
  {
    backgroundColor: colors.gray1
  },
  "TableHead"
);

export const TableRow = styled("tr", undefined, "TableRow");

export const TableHeadCell = styled(
  "th",
  {
    textAlign: "left",
    padding: spacingConfig[2],
    fontWeight: fontWeightConfig.semiBold,
    borderTop: `1px solid ${colors.gray3}`
  },
  "TableHeadCell"
);

export const TableCell = styled(
  "td",
  {
    padding: spacingConfig[2],
    borderTop: `1px solid ${colors.gray3}`
  },
  "TableCell"
);

export const borderedTable = css(
  {
    border: `1px solid ${colors.gray3}`,
    td: {
      borderLeft: `1px solid ${colors.gray3}`,
      "&:first-child": {
        borderLeft: 0
      }
    },
    th: {
      borderLeft: `1px solid ${colors.gray3}`,
      "&:first-child": {
        borderLeft: 0
      }
    }
  },
  "borderedTable"
);
