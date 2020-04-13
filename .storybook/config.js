import React from "react";
import { StyleSheetRenderer, Context } from "react-free-style";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { p } from "@borderlesslabs/atoms";
import {
  Container,
  globalStyle,
  invert,
  defaultTheme,
  darkTheme,
  lightTheme,
} from "../src/index";

addDecorator(withKnobs);

const ThemeComponent = ({ children, className, theme, invertTheme }) => (
  <Context.Provider value={new StyleSheetRenderer(true)}>
    <Container
      className={className}
      css={[
        globalStyle,
        defaultTheme,
        { "&&": theme },
        { "&&": { ".invert": invertTheme } },
        p[3],
      ]}
    >
      {children}
    </Container>
  </Context.Provider>
);

const ZoneComponent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

addDecorator(
  withContexts([
    {
      icon: "photo",
      title: "Themes",
      components: [ThemeComponent],
      params: [
        {
          name: "Default",
          props: { theme: {}, invertTheme: {} },
          default: true,
        },
        {
          name: "Light",
          props: { theme: lightTheme, invertTheme: darkTheme },
        },
        {
          name: "Dark",
          props: { theme: darkTheme, invertTheme: lightTheme },
        },
      ],
      options: {
        disable: false,
        cancelable: false,
      },
    },
    {
      icon: "category",
      title: "Zones",
      components: [ZoneComponent],
      params: [
        {
          name: "None",
          props: { className: "" },
          default: true,
        },
        {
          name: "Brand",
          props: { className: "brand" },
        },
        {
          name: "Info",
          props: { className: "info" },
        },
        {
          name: "Warning",
          props: { className: "warning" },
        },
        {
          name: "Danger",
          props: { className: "danger" },
        },
        {
          name: "Success",
          props: { className: "success" },
        },
      ],
    },
  ])
);
