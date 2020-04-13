import uniqueid from "uniqueid";
import { colorConfig } from "@borderlesslabs/atoms";
import { Css } from "react-free-style";

const seq = uniqueid("--ui");

export const themeVars = {
  /** Primary text. */
  text: seq(),
  /** UI text for UI backgrounds. */
  textUi: seq(),
  /** Placeholder text. */
  textPlaceholder: seq(),
  /** Page background. */
  background: seq(),
  /** Page background offset. */
  backgroundOffset: seq(),
  /** Disabled background. */
  disabledBackground: seq(),
  /** Disabled offset color. */
  disabledOffset: seq(),
  /** Disabled borders, tertiary color. */
  disabledText: seq(),
  /** UI background. */
  uiBackground: seq(),
  /** UI background offset. */
  uiBackgroundOffset: seq(),
  /** UI border/active. */
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
  radioImage: seq(),
  selectImage: seq(),
};

export const lightTheme: Css = {
  [themeVars.text]: colorConfig.black,
  [themeVars.textUi]: colorConfig.gray8,
  [themeVars.textPlaceholder]: colorConfig.gray5,
  [themeVars.background]: colorConfig.white,
  [themeVars.backgroundOffset]: colorConfig.gray1,
  [themeVars.disabledBackground]: colorConfig.gray1,
  [themeVars.disabledOffset]: colorConfig.gray2,
  [themeVars.disabledText]: colorConfig.gray3,
  [themeVars.uiBackground]: colorConfig.gray2,
  [themeVars.uiBackgroundOffset]: colorConfig.gray3,
  [themeVars.uiBorder]: colorConfig.gray4,
  [themeVars.interactive]: colorConfig.gray6,
  [themeVars.interactiveOffset]: colorConfig.gray7,
  [themeVars.interactiveActive]: colorConfig.gray5,
  [themeVars.interactiveText]: colorConfig.white,
  [themeVars.focusRing]: colorConfig.gray1,
  ".brand": {
    [themeVars.textUi]: colorConfig.indigo8,
    [themeVars.uiBackground]: colorConfig.indigo1,
    [themeVars.uiBackgroundOffset]: colorConfig.indigo2,
    [themeVars.uiBorder]: colorConfig.indigo4,
    [themeVars.interactive]: colorConfig.indigo6,
    [themeVars.interactiveOffset]: colorConfig.indigo5,
    [themeVars.interactiveActive]: colorConfig.indigo7,
    [themeVars.focusRing]: colorConfig.indigo2,
  },
  ".info": {
    [themeVars.textUi]: colorConfig.blue8,
    [themeVars.uiBackground]: colorConfig.blue1,
    [themeVars.uiBackgroundOffset]: colorConfig.blue2,
    [themeVars.uiBorder]: colorConfig.blue4,
    [themeVars.interactive]: colorConfig.blue6,
    [themeVars.interactiveOffset]: colorConfig.blue5,
    [themeVars.interactiveActive]: colorConfig.blue7,
    [themeVars.focusRing]: colorConfig.blue2,
  },
  ".warning": {
    [themeVars.textUi]: colorConfig.orange8,
    [themeVars.uiBackground]: colorConfig.orange1,
    [themeVars.uiBackgroundOffset]: colorConfig.orange2,
    [themeVars.uiBorder]: colorConfig.orange4,
    [themeVars.interactive]: colorConfig.orange6,
    [themeVars.interactiveOffset]: colorConfig.orange5,
    [themeVars.interactiveActive]: colorConfig.orange7,
    [themeVars.focusRing]: colorConfig.orange2,
  },
  ".danger": {
    [themeVars.textUi]: colorConfig.red8,
    [themeVars.uiBackground]: colorConfig.red1,
    [themeVars.uiBackgroundOffset]: colorConfig.red2,
    [themeVars.uiBorder]: colorConfig.red4,
    [themeVars.interactive]: colorConfig.red6,
    [themeVars.interactiveOffset]: colorConfig.red5,
    [themeVars.interactiveActive]: colorConfig.red7,
    [themeVars.focusRing]: colorConfig.red2,
  },
  ".success": {
    [themeVars.textUi]: colorConfig.green8,
    [themeVars.uiBackground]: colorConfig.green1,
    [themeVars.uiBackgroundOffset]: colorConfig.green2,
    [themeVars.uiBorder]: colorConfig.green4,
    [themeVars.interactive]: colorConfig.green6,
    [themeVars.interactiveOffset]: colorConfig.green5,
    [themeVars.interactiveActive]: colorConfig.green7,
    [themeVars.focusRing]: colorConfig.green2,
  },
  [themeVars.radioImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  [themeVars.checkboxImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  [themeVars.selectImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
};

export const darkTheme: Css = {
  [themeVars.text]: colorConfig.white,
  [themeVars.textUi]: colorConfig.gray1,
  [themeVars.textPlaceholder]: colorConfig.gray6,
  [themeVars.background]: colorConfig.black,
  [themeVars.backgroundOffset]: colorConfig.gray9,
  [themeVars.disabledBackground]: colorConfig.gray9,
  [themeVars.disabledOffset]: colorConfig.gray8,
  [themeVars.disabledText]: colorConfig.gray7,
  [themeVars.uiBackground]: colorConfig.gray8,
  [themeVars.uiBackgroundOffset]: colorConfig.gray7,
  [themeVars.uiBorder]: colorConfig.gray6,
  [themeVars.interactive]: colorConfig.gray6,
  [themeVars.interactiveOffset]: colorConfig.gray5,
  [themeVars.interactiveActive]: colorConfig.gray7,
  [themeVars.interactiveText]: colorConfig.white,
  [themeVars.focusRing]: colorConfig.gray9,
  ".brand": {
    [themeVars.textUi]: colorConfig.indigo1,
    [themeVars.uiBackground]: colorConfig.indigo9,
    [themeVars.uiBackgroundOffset]: colorConfig.indigo8,
    [themeVars.uiBorder]: colorConfig.indigo6,
    [themeVars.interactive]: colorConfig.indigo6,
    [themeVars.interactiveOffset]: colorConfig.indigo5,
    [themeVars.interactiveActive]: colorConfig.indigo7,
    [themeVars.focusRing]: colorConfig.indigo9,
  },
  ".info": {
    [themeVars.textUi]: colorConfig.blue1,
    [themeVars.uiBackground]: colorConfig.blue9,
    [themeVars.uiBackgroundOffset]: colorConfig.blue8,
    [themeVars.uiBorder]: colorConfig.blue6,
    [themeVars.interactive]: colorConfig.blue6,
    [themeVars.interactiveOffset]: colorConfig.blue5,
    [themeVars.interactiveActive]: colorConfig.blue7,
    [themeVars.focusRing]: colorConfig.blue9,
  },
  ".warning": {
    [themeVars.textUi]: colorConfig.orange1,
    [themeVars.uiBackground]: colorConfig.orange9,
    [themeVars.uiBackgroundOffset]: colorConfig.orange8,
    [themeVars.uiBorder]: colorConfig.orange6,
    [themeVars.interactive]: colorConfig.orange6,
    [themeVars.interactiveOffset]: colorConfig.orange5,
    [themeVars.interactiveActive]: colorConfig.orange7,
    [themeVars.focusRing]: colorConfig.orange9,
  },
  ".danger": {
    [themeVars.textUi]: colorConfig.red1,
    [themeVars.uiBackground]: colorConfig.red9,
    [themeVars.uiBackgroundOffset]: colorConfig.red8,
    [themeVars.uiBorder]: colorConfig.red6,
    [themeVars.interactive]: colorConfig.red6,
    [themeVars.interactiveOffset]: colorConfig.red5,
    [themeVars.interactiveActive]: colorConfig.red7,
    [themeVars.focusRing]: colorConfig.red9,
  },
  ".success": {
    [themeVars.textUi]: colorConfig.green1,
    [themeVars.uiBackground]: colorConfig.green9,
    [themeVars.uiBackgroundOffset]: colorConfig.green8,
    [themeVars.uiBorder]: colorConfig.green6,
    [themeVars.interactive]: colorConfig.green6,
    [themeVars.interactiveOffset]: colorConfig.green5,
    [themeVars.interactiveActive]: colorConfig.green7,
    [themeVars.focusRing]: colorConfig.green9,
  },
  [themeVars.radioImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  [themeVars.checkboxImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  [themeVars.selectImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
};
