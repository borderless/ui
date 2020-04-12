import * as React from "react";
import {
  flex,
  flexColumn,
  mb,
  mr,
  Box,
  Button,
  ButtonMinimal,
  ButtonOutline,
  ButtonPrimary,
  SpinnerInline,
} from "../index";

export default {
  title: "Buttons",
};

export const buttons = () => {
  return (
    <Box css={[flex, flexColumn]}>
      <Box css={[flex, mb[3]]}>
        <Button css={mr[2]}>Button</Button>
        <ButtonPrimary css={mr[2]}>Primary</ButtonPrimary>
        <ButtonOutline css={mr[2]}>Outline</ButtonOutline>
        <ButtonMinimal css={mr[2]}>Minimal</ButtonMinimal>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button css={mr[2]}>
          <SpinnerInline css={mr[1]} /> Button
        </Button>
        <ButtonPrimary css={mr[2]}>
          <SpinnerInline css={mr[1]} /> Primary
        </ButtonPrimary>
        <ButtonOutline css={mr[2]}>
          <SpinnerInline css={mr[1]} /> Outline
        </ButtonOutline>
        <ButtonMinimal css={mr[2]}>
          <SpinnerInline css={mr[1]} /> Minimal
        </ButtonMinimal>
      </Box>

      <Box css={[flex, mb[3]]}>
        <Button css={mr[2]} disabled>
          Button
        </Button>
        <ButtonPrimary css={mr[2]} disabled>
          Primary
        </ButtonPrimary>
        <ButtonOutline css={mr[2]} disabled>
          Outline
        </ButtonOutline>
        <ButtonMinimal css={mr[2]} disabled>
          Minimal
        </ButtonMinimal>
      </Box>
    </Box>
  );
};
