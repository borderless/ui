import { styled, css, Css } from "react-free-style";
import {
  fontSize,
  leading,
  nest,
  m,
  p,
  NestedCss,
  pseudoHover,
  pseudoActive,
  pseudoDisabled,
  pseudoFocus,
} from "@borderlesslabs/atoms";
import { fontSans } from "./Text";
import { themeVars } from "./theme";

/**
 * Inverted styles.
 */
export const invert = nest(".invert", "invert");

/**
 * Root (`:root`) selector.
 */
export const root = nest(":root", "root", true);

/**
 * CSS selector versions of interactivity.
 */
const selectorFocus = nest("&.focus", "focus");
const selectorHover = nest("&.hover", "hover");
const selectorActive = nest("&.active", "active");
const selectorDisabled = nest("&.disabled", "disabled");
const selectorEffects = nest("&:not(.no-effects)", "effects");

/**
 * Hover (`:focus`, `.focus`) CSS selector.
 */
export const focus = (...css: NestedCss[]) => [
  selectorEffects(pseudoFocus(...css)),
  selectorFocus(...css),
];

/**
 * Hover (`:hover`, `.hover`) CSS selector.
 */
export const hover = (...css: NestedCss[]) => [
  selectorEffects(pseudoHover(...css)),
  selectorHover(...css),
];

/**
 * Active (`:active`, `.active`) CSS selector.
 */
export const active = (...css: NestedCss[]) => [
  selectorEffects(pseudoActive(...css)),
  selectorActive(...css),
];

/**
 * Disabled (`:disabled`, `.disabled`) CSS selector.
 */
export const disabled = (...css: NestedCss[]) => [
  selectorEffects(pseudoDisabled(...css)),
  selectorDisabled(...css),
];

/**
 * Global styles for building applications.
 */
export const globalStyle = css({
  $global: true,
  html: {
    WebkitTextSizeAdjust: "100%",
  },
  body: {
    margin: 0,
  },
});

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
    const animationName = Style.registerCss({
      $global: true,
      "@keyframes &": styles,
    });

    return { animationName };
  });
};
