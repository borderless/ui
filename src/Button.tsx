import { styled, css } from "react-free-style";
import {
  inlineFlex,
  justifyCenter,
  itemsCenter,
  borderColor,
  borderSolid,
  boxBorder,
  outlineNone,
  pseudoHover,
  border,
  pseudoDisabled,
  pseudoFocus,
  cursorNotAllowed,
  opacity50,
  cursorPointer,
  pseudoActive
} from "@borderlesslabs/atoms";
import { inputStandard } from "./Input";
import { theme } from "./theme";

export const buttonPrimary = css(
  borderColor.transparent,
  {
    color: `var(${theme.interactiveText1})`,
    backgroundColor: `var(${theme.interactive1})`
  },
  pseudoHover({ backgroundColor: `var(${theme.interactiveHover1})` }),
  pseudoActive({ backgroundColor: `var(${theme.interactiveActive1})` })
);

export const buttonSecondary = css(
  borderColor.transparent,
  {
    color: `var(${theme.interactiveText2})`,
    backgroundColor: `var(${theme.interactive2})`
  },
  pseudoHover({ backgroundColor: `var(${theme.interactiveHover2})` }),
  pseudoActive({ backgroundColor: `var(${theme.interactiveActive2})` })
);

export const buttonOutline = css(
  {
    color: `var(${theme.interactive1})`,
    borderColor: `var(${theme.interactive1})`
  },
  pseudoHover({
    color: `var(${theme.interactiveText1})`,
    backgroundColor: `var(${theme.interactive1})`
  }),
  pseudoActive(borderColor.transparent, {
    color: `var(${theme.interactiveText1})`,
    backgroundColor: `var(${theme.interactiveActive1})`
  })
);

export const buttonMinimal = css(
  { color: `var(${theme.interactive1})` },
  pseudoHover({ color: `var(${theme.interactiveHover1})` }),
  pseudoActive({ color: `var(${theme.interactiveActive1})` })
);

export const buttonInfo = css(
  buttonPrimary,
  { backgroundColor: `var(${theme.info1})` },
  pseudoHover({ backgroundColor: `var(${theme.infoHover1})` }),
  pseudoActive({ backgroundColor: `var(${theme.infoActive1})` })
);

export const buttonSuccess = css(
  buttonPrimary,
  { backgroundColor: `var(${theme.success1})` },
  pseudoHover({ backgroundColor: `var(${theme.successHover1})` }),
  pseudoActive({ backgroundColor: `var(${theme.successActive1})` })
);

export const buttonWarning = css(
  buttonPrimary,
  { backgroundColor: `var(${theme.warning1})` },
  pseudoHover({ backgroundColor: `var(${theme.warningHover1})` }),
  pseudoActive({ backgroundColor: `var(${theme.warningActive1})` })
);

export const buttonDanger = css(
  buttonPrimary,
  { backgroundColor: `var(${theme.danger1})` },
  pseudoHover({ backgroundColor: `var(${theme.dangerHover1})` }),
  pseudoActive({ backgroundColor: `var(${theme.dangerActive1})` })
);

export const button = css(
  { color: `var(${theme.text1})` },
  inputStandard,
  cursorPointer,
  boxBorder,
  inlineFlex,
  justifyCenter,
  itemsCenter,
  outlineNone,
  border[1],
  borderSolid,
  {
    borderColor: `var(${theme.background})`,
    backgroundColor: `var(${theme.background})`
  },
  pseudoFocus({ boxShadow: `0 0 0 3px var(${theme.focus1})` }),
  pseudoDisabled(cursorNotAllowed, opacity50)
);

export const Button = styled("button", button);
