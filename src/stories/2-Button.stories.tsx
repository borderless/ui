import * as React from "react";
import { action } from "@storybook/addon-actions";
import { flex, flexColumn, mb, mr } from "@borderlesslabs/atoms";
import {
  Box,
  Button,
  buttonPrimary,
  buttonOutline,
  buttonMinimal
} from "../index";
import { buttonSuccess, buttonDanger, buttonWarning } from "../Button";
import { inputSmall, inputLarge } from "../Input";

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
        <Button onClick={action("clicked")} css={[buttonPrimary, mr[2]]}>
          Primary Button
        </Button>
        <Button onClick={action("clicked")} css={[buttonOutline, mr[2]]}>
          Outline Primary Button
        </Button>
        <Button onClick={action("clicked")} css={[buttonMinimal, mr[2]]}>
          Minimal Primary Button
        </Button>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button onClick={action("clicked")} css={mr[2]} disabled>
          Default Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={[buttonPrimary, mr[2]]}
          disabled
        >
          Primary Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={[buttonOutline, mr[2]]}
          disabled
        >
          Outline Primary Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={[buttonMinimal, mr[2]]}
          disabled
        >
          Minimal Primary Button
        </Button>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button onClick={action("clicked")} css={[buttonSuccess, mr[2]]}>
          Success Button
        </Button>
        <Button onClick={action("clicked")} css={[buttonDanger, mr[2]]}>
          Danger Button
        </Button>
        <Button onClick={action("clicked")} css={[buttonWarning, mr[2]]}>
          Warning Button
        </Button>
      </Box>
      <Box css={[flex, mb[3]]}>
        <Button onClick={action("clicked")} css={[inputSmall, mr[2]]}>
          Default Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={[inputSmall, buttonPrimary, mr[2]]}
        >
          Primary Button
        </Button>
        <Button onClick={action("clicked")} css={[inputLarge, mr[2]]}>
          Default Button
        </Button>
        <Button
          onClick={action("clicked")}
          css={[inputLarge, buttonPrimary, mr[2]]}
        >
          Primary Button
        </Button>
      </Box>
    </Box>
  );
};
