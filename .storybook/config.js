import React from "react";
import { StyleSheetRenderer, Context } from "react-free-style";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { p } from "@borderlesslabs/atoms";
import { PreferredContainer, globalCss, invert } from "../src/index";
import { darkTheme, lightTheme } from "../src/theme";

addDecorator(withKnobs);

const ThemeComponent = ({ children, theme, invertTheme }) => (
  <Context.Provider value={new StyleSheetRenderer(true)}>
    <PreferredContainer
      css={[globalCss, { "&&": theme }, { "&&": invert(invertTheme) }, p[3]]}
    >
      {children}
    </PreferredContainer>
  </Context.Provider>
);

addDecorator(
  withContexts([
    {
      icon: "box",
      title: "Themes",
      components: [ThemeComponent],
      params: [
        {
          name: "Default",
          props: { theme: {}, invertTheme: {} },
          default: true
        },
        {
          name: "Light",
          props: { theme: lightTheme, invertTheme: darkTheme }
        },
        {
          name: "Dark",
          props: { theme: darkTheme, invertTheme: lightTheme }
        }
      ],
      options: {
        disable: false,
        cancelable: false
      }
    }
  ])
);
