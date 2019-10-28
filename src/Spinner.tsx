import * as React from "react";
import { styled, Css } from "react-free-style";
import { colors } from "./config";
import { animationName } from "./utilities";
import { rounded, borderColor, borderSolid, boxBorder } from "./css";

const Base = styled("div", [
  animationName({
    to: {
      transform: `rotate(360deg)`
    }
  }),
  {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  },
  boxBorder,
  rounded.full,
  borderSolid,
  borderColor.transparent
]);

export function Spinner({
  size = 40,
  width = 2,
  color = colors.gray4,
  backgroundColor = colors.gray1,
  css,
  ...props
}: Omit<JSX.IntrinsicElements["div"], "ref"> & {
  css?: Css;
  size?: number | string;
  width?: number | string;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <Base
      css={[
        {
          width: size,
          height: size,
          borderWidth: width,
          borderColor: backgroundColor,
          borderRightColor: color
        },
        css
      ]}
      {...props}
    />
  );
}
