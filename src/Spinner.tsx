import * as React from "react";
import { styled, Css } from "react-free-style";
import {
  rounded,
  borderColor,
  borderSolid,
  boxBorder,
  colorConfig,
  animationName
} from "@borderlesslabs/atoms";

const Base = styled("div", [
  animationName({
    $displayName: "spinner",
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
  color = colorConfig.gray4,
  backgroundColor = colorConfig.gray1,
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
