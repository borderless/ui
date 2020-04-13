import React from "react";
import { styled } from "react-free-style";
import {
  rounded,
  borderColor,
  borderSolid,
  boxBorder,
  colorConfig,
} from "@borderlesslabs/atoms";
import { animationName } from "./utilities";

const BaseSpinner = styled("div", [
  animationName({
    $displayName: "spinner",
    to: {
      transform: `rotate(360deg)`,
    },
  }),
  {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  boxBorder,
  rounded.full,
  borderSolid,
  borderColor.transparent,
]);

export function Spinner({
  size = 40,
  width = 4,
  color = colorConfig.current,
  backgroundColor = colorConfig.transparent,
  css,
  ...props
}: JSX.IntrinsicElements["div"] & {
  size?: number | string;
  width?: number | string;
  color?: string;
  backgroundColor?: string;
}) {
  return (
    <BaseSpinner
      css={[
        {
          width: size,
          height: size,
          borderWidth: width,
          borderColor: backgroundColor,
          borderLeftColor: color,
        },
        css,
      ]}
      {...props}
    />
  );
}

export const SpinnerInline = (props: JSX.IntrinsicElements["div"]) => (
  <Spinner size="1em" width={2} {...props} />
);
