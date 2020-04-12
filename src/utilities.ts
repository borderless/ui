import { styled, css, Css } from "react-free-style";
import {
  fontSize,
  leading,
  nest,
  m,
  p,
  mqDarkMode,
} from "@borderlesslabs/atoms";
import { fontSans } from "./Text";
import { lightTheme, darkTheme, themeVars } from "./theme";

/**
 * Inverted styles.
 */
export const invert = nest(".invert", "invert");

/**
 * Global styles for building applications.
 */
export const globalStyles = css((f) =>
  f.registerCss({
    html: {
      WebkitTextSizeAdjust: "100%",
    },
    body: {
      margin: 0,
    },
  })
);

/**
 * Default theme settings.
 */
export const defaultTheme = [
  lightTheme,
  invert(darkTheme),
  mqDarkMode(darkTheme, invert(lightTheme)),
];

/**
 * UI container element with default styles.
 */
export const Container = styled("div", [
  {
    color: `var(${themeVars.text})`,
    backgroundColor: `var(${themeVars.background})`,
  },
  fontSize.m,
  leading.normal,
  { fontFamily: fontSans },
  nest("& *", "cssReset")(
    m[0],
    p[0],
    { fontFamily: "inherit" },
    { fontSize: "inherit" },
    { fontWeight: "inherit" },
    { listStyle: "none" }
  ),
]);

/**
 * Create an animation and return as an atomic CSS object (`{ animationName }`).
 */
export const animationName = (styles: Css) => {
  return css((Style) => {
    const animationName = Style.registerKeyframes(styles);

    return { animationName };
  });
};
