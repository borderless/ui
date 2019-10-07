import * as React from "react";
import { styled, Css } from "react-free-style";
import { colors, roundingConfig } from "./config";

const Base = styled("div", f => {
  const spinner = f.registerKeyframes({
    to: {
      transform: `rotate(360deg)`
    }
  });

  return {
    boxSizing: "border-box",
    borderStyle: "solid",
    borderRadius: roundingConfig.full,
    borderColor: colors.transparent,
    animation: `${spinner} 1s linear infinite`
  };
});

export function Spinner({
  size = 40,
  width = 4,
  color = colors.gray5,
  css,
  ...props
}: Omit<JSX.IntrinsicElements["div"], "ref"> & {
  css?: Css;
  size?: number | string;
  width?: number | string;
  color?: string;
}) {
  return (
    <Base
      css={{
        width: size,
        height: size,
        borderWidth: width,
        borderLeftColor: color,
        borderRightColor: color,
        ...css
      }}
      {...props}
    />
  );
}
