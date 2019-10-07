import * as React from "react";
import { join } from "react-free-style";
import { action } from "@storybook/addon-actions";
import {
  Box,
  flex,
  flexColumn,
  Button,
  primaryButton,
  outlinePrimaryButton,
  minimalButton,
  mb,
  mr
} from "../index";

export default {
  title: "Buttons"
};

export const textButtons = () => {
  return (
    <Box css={[flex, flexColumn]}>
      <Box css={[flex, mb[3]]}>
        <Button onClick={action("clicked")} css={mr[2]}>
          Default Button
        </Button>
        <Button onClick={action("clicked")} css={join(primaryButton, mr[2])}>
          Primary Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={join(outlinePrimaryButton, mr[2])}
        >
          Outline Primary Button
        </Button>
        <Button onClick={action("clicked")} css={join(minimalButton, mr[2])}>
          Minimal Primary Button
        </Button>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button onClick={action("clicked")} css={mr[2]} disabled>
          Default Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={join(primaryButton, mr[2])}
          disabled
        >
          Primary Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={join(outlinePrimaryButton, mr[2])}
          disabled
        >
          Outline Primary Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={join(minimalButton, mr[2])}
          disabled
        >
          Minimal Primary Button
        </Button>
      </Box>
    </Box>
  );
};
