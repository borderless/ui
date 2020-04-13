import React from "react";
import {
  colorConfig,
  spacingConfig,
  w,
  h,
  backgroundColor,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  p,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
  Box,
} from "../index";

export default {
  title: "Utilities",
};

export const spacing = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadCell>Index</TableHeadCell>
        <TableHeadCell>Size</TableHeadCell>
        <TableHeadCell>Example</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {Object.entries(spacingConfig).map(([key, value]) => (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>{value}</TableCell>
          <TableCell>
            <Box
              css={[
                w[(key as any) as keyof typeof spacingConfig],
                backgroundColor.gray5,
                h[4],
              ]}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ColorBlock = ({ name, color }: { name: string; color: string }) => (
  <Box
    css={[inlineFlex, justifyCenter, itemsCenter, p[1], w[24], h[8]]}
    style={{
      backgroundColor: color,
    }}
  >
    {name}
  </Box>
);

export const colors = () => (
  <Box>
    {Object.entries(colorConfig).map(([key, value]) => (
      <ColorBlock key={key} name={key} color={value} />
    ))}
  </Box>
);
