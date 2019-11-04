import { styled, css } from "react-free-style";
import { color, fontSize, leading, nest, m, p } from "@borderlesslabs/atoms";
import { fontSans } from "./Text";

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

export const Container = styled("div", [
  color.gray8,
  fontSize.m,
  leading.normal,
  { fontFamily: fontSans },
  nest("& *", "wildcard")(
    m[0],
    p[0],
    { fontSize: "inherit" },
    { fontWeight: "inherit" },
    { listStyle: "none" }
  )
]);
