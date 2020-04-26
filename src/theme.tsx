import uniqueid from "uniqueid";
import { colorConfig } from "@borderlesslabs/atoms";
import { Css } from "react-free-style";

const seq = uniqueid("--ui");

export const themeVars = {
  /** Primary text. */
  text: seq(),
  /** Header text. */
  textEmphasis: seq(),
  /** Help text. */
  textSubtle: seq(),
  /** Page background. */
  background: seq(),
  /** Page background offset. */
  inputBackground: seq(),
  /** Placeholder text. */
  inputPlaceholder: seq(),
  /** Disabled background. */
  disabledBackground: seq(),
  /** Disabled offset color. */
  disabledOffset: seq(),
  /** Disabled borders, tertiary color. */
  disabledText: seq(),
  /** UI item. */
  ui: seq(),
  /** UI interaction. */
  uiOffset: seq(),
  /** UI focus/active. */
  uiActive: seq(),
  /** Text color on UI elements. */
  uiText: seq(),
  /** Border color for UI elements. */
  uiBorder: seq(),
  /** Primary interactive item. */
  interactive: seq(),
  /** Interactive interaction. */
  interactiveOffset: seq(),
  /** Interactive focus/active. */
  interactiveActive: seq(),
  /** Text color on interactive elements. */
  interactiveText: seq(),
  /** Focus ring outline. */
  focusRing: seq(),
  checkboxImage: seq(),
  checkboxImageDisabled: seq(),
  radioImage: seq(),
  radioImageDisabled: seq(),
  selectImage: seq(),
  selectImageDisabled: seq(),
};

export const radioImage = (color: string) =>
  `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${escape(
    color
  )}' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`;

export const checkboxImage = (color: string) =>
  `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${escape(
    color
  )}' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`;

export const selectImage = (color: string) =>
  `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${escape(
    color
  )}'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`;

export const lightTheme: Css = {
  [themeVars.text]: colorConfig.gray9,
  [themeVars.textEmphasis]: colorConfig.black,
  [themeVars.textSubtle]: colorConfig.gray5,
  [themeVars.background]: colorConfig.white,
  [themeVars.inputBackground]: colorConfig.gray1,
  [themeVars.inputPlaceholder]: colorConfig.gray5,
  [themeVars.disabledBackground]: colorConfig.gray1,
  [themeVars.disabledOffset]: colorConfig.gray2,
  [themeVars.disabledText]: colorConfig.gray3,
  [themeVars.ui]: colorConfig.gray2,
  [themeVars.uiOffset]: colorConfig.gray3,
  [themeVars.uiActive]: colorConfig.gray4,
  [themeVars.uiText]: colorConfig.gray9,
  [themeVars.uiBorder]: colorConfig.gray5,
  [themeVars.interactive]: colorConfig.gray6,
  [themeVars.interactiveOffset]: colorConfig.gray7,
  [themeVars.interactiveActive]: colorConfig.gray5,
  [themeVars.interactiveText]: colorConfig.white,
  [themeVars.focusRing]: colorConfig.gray1,
  ".brand": {
    [themeVars.ui]: colorConfig.indigo1,
    [themeVars.uiOffset]: colorConfig.indigo2,
    [themeVars.uiActive]: colorConfig.indigo3,
    [themeVars.uiText]: colorConfig.indigo9,
    [themeVars.uiBorder]: colorConfig.indigo5,
    [themeVars.interactive]: colorConfig.indigo6,
    [themeVars.interactiveOffset]: colorConfig.indigo5,
    [themeVars.interactiveActive]: colorConfig.indigo7,
    [themeVars.focusRing]: colorConfig.indigo2,
  },
  ".info": {
    [themeVars.ui]: colorConfig.blue1,
    [themeVars.uiOffset]: colorConfig.blue2,
    [themeVars.uiActive]: colorConfig.blue3,
    [themeVars.uiText]: colorConfig.blue9,
    [themeVars.uiBorder]: colorConfig.blue5,
    [themeVars.interactive]: colorConfig.blue6,
    [themeVars.interactiveOffset]: colorConfig.blue5,
    [themeVars.interactiveActive]: colorConfig.blue7,
    [themeVars.focusRing]: colorConfig.blue2,
  },
  ".warning": {
    [themeVars.ui]: colorConfig.orange1,
    [themeVars.uiOffset]: colorConfig.orange2,
    [themeVars.uiActive]: colorConfig.orange3,
    [themeVars.uiText]: colorConfig.orange9,
    [themeVars.uiBorder]: colorConfig.orange5,
    [themeVars.interactive]: colorConfig.orange6,
    [themeVars.interactiveOffset]: colorConfig.orange5,
    [themeVars.interactiveActive]: colorConfig.orange7,
    [themeVars.focusRing]: colorConfig.orange2,
  },
  ".danger": {
    [themeVars.ui]: colorConfig.red1,
    [themeVars.uiOffset]: colorConfig.red2,
    [themeVars.uiActive]: colorConfig.red3,
    [themeVars.uiText]: colorConfig.red9,
    [themeVars.uiBorder]: colorConfig.red5,
    [themeVars.interactive]: colorConfig.red6,
    [themeVars.interactiveOffset]: colorConfig.red5,
    [themeVars.interactiveActive]: colorConfig.red7,
    [themeVars.focusRing]: colorConfig.red2,
  },
  ".success": {
    [themeVars.ui]: colorConfig.green1,
    [themeVars.uiOffset]: colorConfig.green2,
    [themeVars.uiActive]: colorConfig.green3,
    [themeVars.uiText]: colorConfig.green9,
    [themeVars.uiBorder]: colorConfig.green5,
    [themeVars.interactive]: colorConfig.green6,
    [themeVars.interactiveOffset]: colorConfig.green5,
    [themeVars.interactiveActive]: colorConfig.green7,
    [themeVars.focusRing]: colorConfig.green2,
  },
  [themeVars.radioImage]: radioImage(colorConfig.white),
  [themeVars.radioImageDisabled]: radioImage(colorConfig.gray3),
  [themeVars.checkboxImage]: checkboxImage(colorConfig.white),
  [themeVars.checkboxImageDisabled]: checkboxImage(colorConfig.gray3),
  [themeVars.selectImage]: selectImage(colorConfig.black),
  [themeVars.selectImageDisabled]: selectImage(colorConfig.gray3),
};

export const darkTheme: Css = {
  [themeVars.text]: colorConfig.gray1,
  [themeVars.textEmphasis]: colorConfig.white,
  [themeVars.textSubtle]: colorConfig.gray5,
  [themeVars.background]: colorConfig.black,
  [themeVars.inputBackground]: colorConfig.gray9,
  [themeVars.inputPlaceholder]: colorConfig.gray6,
  [themeVars.disabledBackground]: colorConfig.gray9,
  [themeVars.disabledOffset]: colorConfig.gray8,
  [themeVars.disabledText]: colorConfig.gray7,
  [themeVars.ui]: colorConfig.gray8,
  [themeVars.uiOffset]: colorConfig.gray7,
  [themeVars.uiActive]: colorConfig.gray9,
  [themeVars.uiText]: colorConfig.gray1,
  [themeVars.uiBorder]: colorConfig.gray5,
  [themeVars.interactive]: colorConfig.gray6,
  [themeVars.interactiveOffset]: colorConfig.gray5,
  [themeVars.interactiveActive]: colorConfig.gray7,
  [themeVars.interactiveText]: colorConfig.white,
  [themeVars.focusRing]: colorConfig.gray9,
  ".brand": {
    [themeVars.ui]: colorConfig.indigo8,
    [themeVars.uiOffset]: colorConfig.indigo7,
    [themeVars.uiActive]: colorConfig.indigo9,
    [themeVars.uiText]: colorConfig.indigo1,
    [themeVars.uiBorder]: colorConfig.indigo5,
    [themeVars.interactive]: colorConfig.indigo6,
    [themeVars.interactiveOffset]: colorConfig.indigo5,
    [themeVars.interactiveActive]: colorConfig.indigo7,
    [themeVars.focusRing]: colorConfig.indigo9,
  },
  ".info": {
    [themeVars.ui]: colorConfig.blue8,
    [themeVars.uiOffset]: colorConfig.blue7,
    [themeVars.uiActive]: colorConfig.blue9,
    [themeVars.uiText]: colorConfig.blue1,
    [themeVars.uiBorder]: colorConfig.blue5,
    [themeVars.interactive]: colorConfig.blue6,
    [themeVars.interactiveOffset]: colorConfig.blue5,
    [themeVars.interactiveActive]: colorConfig.blue7,
    [themeVars.focusRing]: colorConfig.blue9,
  },
  ".warning": {
    [themeVars.ui]: colorConfig.orange8,
    [themeVars.uiOffset]: colorConfig.orange7,
    [themeVars.uiActive]: colorConfig.orange9,
    [themeVars.uiText]: colorConfig.orange1,
    [themeVars.uiBorder]: colorConfig.orange5,
    [themeVars.interactive]: colorConfig.orange6,
    [themeVars.interactiveOffset]: colorConfig.orange5,
    [themeVars.interactiveActive]: colorConfig.orange7,
    [themeVars.focusRing]: colorConfig.orange9,
  },
  ".danger": {
    [themeVars.ui]: colorConfig.red8,
    [themeVars.uiOffset]: colorConfig.red7,
    [themeVars.uiActive]: colorConfig.red9,
    [themeVars.uiText]: colorConfig.red1,
    [themeVars.uiBorder]: colorConfig.red5,
    [themeVars.interactive]: colorConfig.red6,
    [themeVars.interactiveOffset]: colorConfig.red5,
    [themeVars.interactiveActive]: colorConfig.red7,
    [themeVars.focusRing]: colorConfig.red9,
  },
  ".success": {
    [themeVars.ui]: colorConfig.green8,
    [themeVars.uiOffset]: colorConfig.green7,
    [themeVars.uiActive]: colorConfig.green9,
    [themeVars.uiText]: colorConfig.green1,
    [themeVars.uiBorder]: colorConfig.green5,
    [themeVars.interactive]: colorConfig.green6,
    [themeVars.interactiveOffset]: colorConfig.green5,
    [themeVars.interactiveActive]: colorConfig.green7,
    [themeVars.focusRing]: colorConfig.green9,
  },
  [themeVars.radioImage]: radioImage(colorConfig.white),
  [themeVars.radioImageDisabled]: radioImage(colorConfig.gray7),
  [themeVars.checkboxImage]: checkboxImage(colorConfig.white),
  [themeVars.checkboxImageDisabled]: checkboxImage(colorConfig.gray7),
  [themeVars.selectImage]: selectImage(colorConfig.white),
  [themeVars.selectImageDisabled]: selectImage(colorConfig.gray7),
};
