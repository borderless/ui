import uniqueid from "uniqueid";
import { colorConfig } from "@borderlesslabs/atoms";
import { Css } from "react-free-style";

const seq = uniqueid("--ui");

export const theme = {
  background: seq(), // Page background.
  ui1: seq(), // Container background.
  ui2: seq(), // Borders, tertiary background.
  uiHover1: seq(), // UI interactivity.
  uiActive1: seq(),
  text1: seq(), // Primary text.
  text2: seq(), // Secondary text, labels.
  text3: seq(), // Help text.
  placeholder1: seq(), // Placeholder text.
  interactive1: seq(), // Primary interactive item.
  interactiveText1: seq(),
  interactiveHover1: seq(),
  interactiveActive1: seq(),
  interactive2: seq(), // Secondary interactive item.
  interactiveText2: seq(),
  interactiveHover2: seq(),
  interactiveActive2: seq(),
  link1: seq(), // Link color.
  field1: seq(), // Field background.
  info1: seq(), // Info colors.
  infoHover1: seq(),
  infoActive1: seq(),
  warning1: seq(), // Warning colors.
  warningHover1: seq(),
  warningActive1: seq(),
  danger1: seq(), // Danger colors.
  dangerHover1: seq(),
  dangerActive1: seq(),
  success1: seq(), // Success colors.
  successHover1: seq(),
  successActive1: seq(),
  focus1: seq(), // Focus color.
  checkboxImage: seq(),
  radioImage: seq(),
  selectImage: seq()
};

export const lightTheme: Css = {
  [theme.background]: colorConfig.white,
  [theme.ui1]: colorConfig.gray1,
  [theme.ui2]: colorConfig.gray2,
  [theme.uiHover1]: colorConfig.gray3,
  [theme.uiActive1]: colorConfig.gray4,
  [theme.text1]: colorConfig.black,
  [theme.text2]: colorConfig.gray8,
  [theme.text3]: colorConfig.gray6,
  [theme.placeholder1]: colorConfig.gray5,
  [theme.interactive1]: colorConfig.indigo6,
  [theme.interactiveText1]: colorConfig.white,
  [theme.interactiveHover1]: colorConfig.indigo7,
  [theme.interactiveActive1]: colorConfig.indigo8,
  [theme.interactive2]: colorConfig.gray8,
  [theme.interactiveText2]: colorConfig.white,
  [theme.interactiveHover2]: colorConfig.gray7,
  [theme.interactiveActive2]: colorConfig.gray6,
  [theme.field1]: colorConfig.gray1,
  [theme.link1]: colorConfig.indigo7,
  [theme.info1]: colorConfig.blue6,
  [theme.infoHover1]: colorConfig.blue7,
  [theme.infoActive1]: colorConfig.blue8,
  [theme.warning1]: colorConfig.orange6,
  [theme.warningHover1]: colorConfig.orange7,
  [theme.warningActive1]: colorConfig.orange8,
  [theme.danger1]: colorConfig.red6,
  [theme.dangerHover1]: colorConfig.red7,
  [theme.dangerActive1]: colorConfig.red8,
  [theme.success1]: colorConfig.green6,
  [theme.successHover1]: colorConfig.green7,
  [theme.successActive1]: colorConfig.green8,
  [theme.focus1]: colorConfig.indigo5,
  [theme.radioImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  [theme.checkboxImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  [theme.selectImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`
};

export const darkTheme: Css = {
  [theme.background]: colorConfig.black,
  [theme.ui1]: colorConfig.gray8,
  [theme.ui2]: colorConfig.gray7,
  [theme.uiHover1]: colorConfig.gray6,
  [theme.uiActive1]: colorConfig.gray5,
  [theme.text1]: colorConfig.white,
  [theme.text2]: colorConfig.gray2,
  [theme.text3]: colorConfig.gray4,
  [theme.placeholder1]: colorConfig.gray5,
  [theme.interactive1]: colorConfig.indigo6,
  [theme.interactiveText1]: colorConfig.white,
  [theme.interactiveHover1]: colorConfig.indigo7,
  [theme.interactiveActive1]: colorConfig.indigo8,
  [theme.interactive2]: colorConfig.gray8,
  [theme.interactiveText2]: colorConfig.white,
  [theme.interactiveHover2]: colorConfig.gray7,
  [theme.interactiveActive2]: colorConfig.gray6,
  [theme.field1]: colorConfig.gray9,
  [theme.link1]: colorConfig.indigo5,
  [theme.info1]: colorConfig.blue6,
  [theme.infoHover1]: colorConfig.blue7,
  [theme.infoActive1]: colorConfig.blue8,
  [theme.warning1]: colorConfig.orange6,
  [theme.warningHover1]: colorConfig.orange7,
  [theme.warningActive1]: colorConfig.orange8,
  [theme.danger1]: colorConfig.red6,
  [theme.dangerHover1]: colorConfig.red7,
  [theme.dangerActive1]: colorConfig.red8,
  [theme.success1]: colorConfig.green6,
  [theme.successHover1]: colorConfig.green7,
  [theme.successActive1]: colorConfig.green8,
  [theme.focus1]: colorConfig.gray1,
  [theme.radioImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  [theme.checkboxImage]: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  [theme.selectImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`
};
