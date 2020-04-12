import * as React from "react";
import { mr, ml, mb, flex, flexColumn } from "@borderlesslabs/atoms";
import { Box, Input, Select, Label, InlineLabel, LabelText } from "../index";
import { inputLarge, inputSmall, Textarea } from "../Input";

export default {
  title: "Form",
};

export const input = () => (
  <Box css={[flex, flexColumn]}>
    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Default input:</LabelText>
        <Input defaultValue="Default Value" />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Placeholder input:</LabelText>
        <Input placeholder="Placeholder value" />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Disabled input:</LabelText>
        <Input defaultValue="Disabled Input" disabled />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Required input:</LabelText>
        <Input required />
      </Label>
    </Box>

    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Small input:</LabelText>
        <Input css={inputSmall} />
      </Label>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Large input:</LabelText>
        <Input css={inputLarge} />
      </Label>
    </Box>

    <Box css={[flex, mb[3]]}>
      <Label css={mr[2]}>
        <LabelText css={mb[2]}>Text area:</LabelText>
        <Textarea />
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
    <LabelText css={mb[2]}>Select values</LabelText>
    <Box css={mb[2]}>
      <InlineLabel>
        <Input name="test1" type="radio" css={mr[2]} /> Value 1
      </InlineLabel>
      <InlineLabel css={ml[8]}>
        <Input name="test1" type="radio" css={mr[2]} checked /> Value 2
      </InlineLabel>
    </Box>
    <LabelText css={mb[2]}>Disabled values</LabelText>
    <Box css={mb[2]}>
      <InlineLabel>
        <Input name="test2" type="radio" css={mr[2]} disabled /> Value 1
      </InlineLabel>
      <InlineLabel css={ml[8]}>
        <Input name="test2" type="radio" css={mr[2]} checked disabled /> Value 2
      </InlineLabel>
    </Box>
  </Box>
);

export const checkbox = () => (
  <Box css={flexColumn}>
    <Box css={mb[2]}>
      <InlineLabel css={mr[2]}>
        <Input name="test1" type="checkbox" css={mr[2]} /> Check box
      </InlineLabel>
      <InlineLabel css={mr[2]}>
        <Input name="test2" type="checkbox" css={mr[2]} checked /> Checked box
      </InlineLabel>
    </Box>
    <Box css={mb[2]}>
      <InlineLabel css={mr[2]}>
        <Input name="test3" type="checkbox" css={mr[2]} disabled /> Disabled
        check box
      </InlineLabel>
      <InlineLabel css={mr[2]}>
        <Input name="test4" type="checkbox" css={mr[2]} checked disabled />{" "}
        Disabled checked box
      </InlineLabel>
    </Box>
  </Box>
);
