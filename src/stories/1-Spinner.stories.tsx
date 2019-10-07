import * as React from "react";
import { number } from "@storybook/addon-knobs";
import { Spinner } from "../Spinner";

export default {
  title: "Spinner"
};

export const spinner = () => (
  <Spinner size={number("Size", 40)} width={number("Width", 4)} />
);
