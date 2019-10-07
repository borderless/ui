import * as React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableHeadCell,
  borderedTable
} from "../index";

export default {
  title: "Table"
};

export const table = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>Blake</TableCell>
        <TableCell>blake@example.com</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Keyue</TableCell>
        <TableCell>keyue@example.com</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const tableBorder = () => (
  <Table css={borderedTable}>
    <TableHead>
      <TableRow>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>Blake</TableCell>
        <TableCell>blake@example.com</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Keyue</TableCell>
        <TableCell>keyue@example.com</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
