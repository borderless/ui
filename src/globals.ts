import { styled, css } from "react-free-style";
import { fontSizeConfig, fontConfig, colors, lineHeightConfig } from "./config";

export const globalCss = css(f => {
  f.registerCss({
    html: {
      WebkitTextSizeAdjust: "100%"
    },
    body: {
      margin: 0
    }
  });

  return "";
});

export const Container = styled("div", {
  color: colors.gray8,
  fontSize: fontSizeConfig.m,
  fontFamily: fontConfig.sans,
  lineHeight: lineHeightConfig.normal,
  "& *": {
    fontSize: "inherit",
    fontWeight: "inherit",
    margin: 0,
    padding: 0,
    listStyle: "none"
  }
});
