import * as React from "react";
import { flex, flexColumn, mb, mr } from "@borderlesslabs/atoms";
import {
  Box,
  Button,
  buttonPrimary,
  buttonOutline,
  buttonMinimal
} from "../index";
import { inputSmall, inputLarge, inputXLarge } from "../Input";
import {
  buttonSuccess,
  buttonDanger,
  buttonWarning,
  buttonSecondary
} from "../Button";

export default {
  title: "Buttons"
};

export const textButtons = () => {
  return (
    <Box css={[flex, flexColumn]}>
      <Box css={[flex, mb[3]]}>
        <Button css={mr[2]}>Default Button</Button>
        <Button css={[buttonPrimary, mr[2]]}>Primary Button</Button>
        <Button css={[buttonSecondary, mr[2]]}>Secondary Button</Button>
        <Button css={[buttonOutline, mr[2]]}>Outline Primary Button</Button>
        <Button css={[buttonMinimal, mr[2]]}>Minimal Primary Button</Button>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button css={mr[2]} disabled>
          Default Button
        </Button>
        <Button css={[buttonPrimary, mr[2]]} disabled>
          Primary Button
        </Button>
        <Button css={[buttonSecondary, mr[2]]} disabled>
          Secondary Button
        </Button>
        <Button css={[buttonOutline, mr[2]]} disabled>
          Outline Primary Button
        </Button>
        <Button css={[buttonMinimal, mr[2]]} disabled>
          Minimal Primary Button
        </Button>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button css={[buttonSuccess, mr[2]]}>Success Button</Button>
        <Button css={[buttonWarning, mr[2]]}>Warning Button</Button>
        <Button css={[buttonDanger, mr[2]]}>Danger Button</Button>
      </Box>
      <Box css={[flex, mb[3]]}>
        <Button css={[inputSmall, mr[2]]}>Default Button</Button>
        <Button css={[inputSmall, buttonPrimary, mr[2]]}>Primary Button</Button>
        <Button css={[inputLarge, mr[2]]}>Default Button</Button>
        <Button css={[inputLarge, buttonPrimary, mr[2]]}>Primary Button</Button>
        <Button css={[inputXLarge, mr[2]]}>Default Button</Button>
        <Button css={[inputXLarge, buttonPrimary, mr[2]]}>
          Primary Button
        </Button>
      </Box>
    </Box>
  );
};
