import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { StyleSheetRenderer, Context } from "react-free-style";
import { withKnobs } from "@storybook/addon-knobs";
import { Container, globalCss, p } from "../src/index";

const renderer = new StyleSheetRenderer(true);

addDecorator(withKnobs);

addDecorator(storyFn => (
  <Context.Provider value={renderer}>
    <Container css={[globalCss, p[3]]}>{storyFn()}</Container>
  </Context.Provider>
));

configure(
  require.context("../src/stories", false, /\.stories\.[tj]sx?$/),
  module
);
