import React from "react";
import { styled } from "react-free-style";
import { themeVars } from "./theme";
import { h, rounded } from "@borderlesslabs/atoms";

const ProgressBar = styled("div", [
  { backgroundColor: `var(${themeVars.uiBorder})` },
  h.full,
  rounded.sm,
]);

const ProgressContainer = styled("div", [
  { backgroundColor: `var(${themeVars.ui})` },
  h.em,
]);

export const Progress = ({
  min = 0,
  max = 100,
  value,
  children,
  ...props
}: JSX.IntrinsicElements["div"] & {
  min?: number;
  max?: number;
  value?: number;
}) => (
  <ProgressContainer {...props}>
    <ProgressBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      area-valuemax={max}
      style={{ width: value ? `${(value / (max - min)) * 100}%` : "100%" }}
    >
      {children}
    </ProgressBar>
  </ProgressContainer>
);
