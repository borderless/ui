import { styled, css, Css } from "react-free-style";
import { color, fontSize, leading, nest, m, p } from "@borderlesslabs/atoms";
import { fontSans } from "./Text";

/**
 * Global styles for building applications.
 */
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

/**
 * UI container element with default styles.
 */
export const Container = styled("div", [
  color.gray8,
  fontSize.m,
  leading.normal,
  { fontFamily: fontSans },
  nest("& *", "cssReset")(
    m[0],
    p[0],
    { fontSize: "inherit" },
    { fontWeight: "inherit" },
    { listStyle: "none" }
  )
]);

/**
 * Create an animation and return as an atomic CSS object (`{ animationName }`).
 */
export const animationName = (styles: Css) => {
  return css(Style => {
    const animationName = Style.registerKeyframes(styles);

    return { animationName };
  });
};
