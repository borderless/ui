import * as React from "react";
import { Box, Dropdown, DropdownItem } from "../index";

export default {
  title: "Dropdown"
};

export const dropdown = () => (
  <Box>
    <Dropdown>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Support</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  </Box>
);
