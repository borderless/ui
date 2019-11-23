import * as React from "react";
import { action } from "@storybook/addon-actions";
import { mr, ml, mb, flex, flexColumn } from "@borderlesslabs/atoms";
import { Box, Input, Select, Label, InlineLabel, LabelText } from "../index";
import { inputLarge, inputSmall, Textarea } from "../Input";

export default {
  title: "Form"
};

export const input = () => (
  <Box css={[flex, flexColumn]}>
    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Default input:</LabelText>
        <Input
          onChange={action("change")}
          onClick={action("click")}
          defaultValue="Default Value"
        />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Placeholder input:</LabelText>
        <Input
          placeholder="Placeholder value"
          onChange={action("change")}
          onClick={action("click")}
        />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Disabled input:</LabelText>
        <Input
          placeholder="Disabled Input"
          onChange={action("change")}
          onClick={action("click")}
          disabled
        />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Required input:</LabelText>
        <Input onChange={action("change")} onClick={action("click")} required />
      </Label>
    </Box>

    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Small input:</LabelText>
        <Input
          onChange={action("change")}
          onClick={action("click")}
          css={inputSmall}
        />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Large input:</LabelText>
        <Input
          onChange={action("change")}
          onClick={action("click")}
          css={inputLarge}
        />
      </Label>
    </Box>

    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Text area:</LabelText>
        <Textarea onChange={action("change")} onClick={action("click")} />
      </Label>
    </Box>
  </Box>
);

export const select = () => (
  <Box>
    <Box css={[flex, mb[4]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Select a value</LabelText>
        <Select>
          <option>Value 1</option>
          <option>Value 2</option>
        </Select>
      </Label>
      <Label>
        <LabelText css={mb[2]}>Disabled selection</LabelText>
        <Select disabled>
          <option>Value 1</option>
          <option>Value 2</option>
        </Select>
      </Label>
    </Box>
    <Box css={flex}>
      <Label>
        <LabelText css={mb[2]}>Multiple select</LabelText>
        <Select multiple>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
          <option>Value 4</option>
          <option>Value 5</option>
        </Select>
      </Label>
    </Box>
  </Box>
);

export const radio = () => (
  <Box>
    <LabelText css={mb[2]}>Select a value</LabelText>
    <Box>
      <InlineLabel>
        <Input name="test" type="radio" css={mr[2]} /> Value 1
      </InlineLabel>
      <InlineLabel css={ml[8]}>
        <Input name="test" type="radio" css={mr[2]} checked /> Value 2
      </InlineLabel>
    </Box>
  </Box>
);

export const checkbox = () => (
  <Box>
    <InlineLabel>
      <Input name="test" type="checkbox" css={mr[2]} /> Check this box
    </InlineLabel>
  </Box>
);
