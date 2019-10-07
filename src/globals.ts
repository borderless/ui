import { styled, css } from "react-free-style";
import { fontSizeConfig, fontConfig, colors } from "./config";

export const globalCss = css(f => {
  f.registerCss({
    body: {
      padding: 0
    }
  });

  return "";
});

export const Container = styled("div", {
  color: colors.gray7,
  fontSize: fontSizeConfig.m,
  fontFamily: fontConfig.sans,
  "& *": {
    fontSize: "inherit",
    fontWeight: "inherit",
    margin: 0,
    padding: 0,
    listStyle: "none"
  }
});
