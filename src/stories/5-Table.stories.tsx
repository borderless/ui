import * as React from "react";
import { mt } from "@borderlesslabs/atoms";
import {
  Box,
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
  <Box>
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

    <Table css={[mt[3], borderedTable]}>
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

    <Table css={mt[3]}>
      <TableBody>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableCell>Blake</TableCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableCell>blake@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableCell>Keyue</TableCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableCell>keyue@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table css={[mt[3], borderedTable]}>
      <TableBody>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableCell>Blake</TableCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableCell>blake@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableCell>Keyue</TableCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableCell>keyue@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
);
