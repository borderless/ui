import { css, Css } from "react-free-style";

export const animationName = (styles: Css) =>
  css(Style => {
    const animationName = Style.registerKeyframes(styles);

    return { animationName };
  });
