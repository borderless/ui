import { styled, css, Css } from "react-free-style";
import {
  fontSize,
  leading,
  nest,
  m,
  p,
  mqDarkMode
} from "@borderlesslabs/atoms";
import { fontSans } from "./Text";
import { lightTheme, darkTheme, theme } from "./theme";

/**
 * Inverted styles.
 */
export const invert = nest(".invert", "invert");

/**
 * Global styles for building applications.
 */
export const globalCss = css(f =>
  f.registerCss({
    html: {
      WebkitTextSizeAdjust: "100%"
    },
    body: {
      margin: 0
    }
  })
);

/**
 * UI container element with default styles.
 */
export const Container = styled("div", [
  lightTheme,
  invert(darkTheme),
  { color: `var(${theme.text1})`, backgroundColor: `var(${theme.background})` },
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
 * Automatically swap between themes based on user preferences.
 */
export const PreferredContainer = styled(
  "div",
  Container.style,
  mqDarkMode(darkTheme, invert(lightTheme))
);

/**
 * Create an animation and return as an atomic CSS object (`{ animationName }`).
 */
export const animationName = (styles: Css) => {
  return css(Style => {
    const animationName = Style.registerKeyframes(styles);

    return { animationName };
  });
};
