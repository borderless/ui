import { Css } from "react-free-style";
import {
  spacingConfig,
  colors,
  roundingConfig,
  fontSizeConfig,
  borderSizeConfig,
  fontWeightConfig,
  boxShadowConfig,
  lineHeightConfig
} from "./config";

const map = <K extends PropertyKey, T, U>(
  dict: Record<K, T>,
  fn: (x: T, k: K) => U
): Record<K, U> => {
  const result = Object.create(null) as Record<K, U>;
  for (const [key, value] of Object.entries(dict)) {
    result[key as K] = fn(value as T, key as K);
  }
  return result;
};

export const floatLeft: Css = { float: "left" };
export const floatRight: Css = { float: "right" };
export const floatNone: Css = { float: "none" };

export const clearFix: Css = {
  "&::after": {
    content: '""',
    display: "table",
    clear: "both"
  }
};

export const block: Css = { display: "block" };
export const inline: Css = { display: "inline" };
export const inlineBlock: Css = { display: "inline-block" };
export const flex: Css = { display: "flex" };
export const inlineFlex: Css = { display: "inline-flex" };
export const table: Css = { display: "table" };
export const tableRow: Css = { display: "table-row" };
export const tableCell: Css = { display: "table-cell" };
export const hidden: Css = { display: "hidden" };

export const posStatic: Css = { position: "static" };
export const posFixed: Css = { position: "fixed" };
export const posAbsolute: Css = { position: "absolute" };
export const posRelative: Css = { position: "relative" };
export const posSticky: Css = { position: "sticky" };

export const visible: Css = { visibility: "visible" };
export const invisible: Css = { visibility: "hidden" };

export const zIndex = Array.from(
  { length: 10 },
  (_, i): Css => ({ zIndex: i })
);

export const flexRow: Css = { flexDirection: "row" };
export const flexRowReverse: Css = { flexDirection: "row-reverse" };
export const flexColumn: Css = { flexDirection: "column" };
export const flexColumnReverse: Css = { flexDirection: "column-reverse" };

export const flexNoWrap: Css = { flexWrap: "nowrap" };
export const flexWrap: Css = { flexWrap: "wrap" };
export const flexWrapReverse: Css = { flexWrap: "wrap-reverse" };

export const justifyStart: Css = { justifyContent: "flex-start" };
export const justifyCenter: Css = { justifyContent: "center" };
export const justifyEnd: Css = { justifyContent: "flex-end" };
export const justifyBetween: Css = { justifyContent: "space-between" };
export const justifyAround: Css = { justifyContent: "space-around" };

export const itemsStart: Css = { alignItems: "flex-start" };
export const itemsCenter: Css = { alignItems: "center" };
export const itemsEnd: Css = { alignItems: "flex-end" };
export const itemsStretch: Css = { alignItems: "space-stretch" };
export const itemsBaseline: Css = { alignItems: "space-baseline" };

export const flexInitial: Css = { flex: "0 1 auto" };
export const flex1: Css = { flex: "1 1 0%" };
export const flexAuto: Css = { flex: "1 1 auto" };
export const flexNone: Css = { flex: "none" };

export const flexGrow1: Css = { flexGrow: 1 };
export const flexGrow0: Css = { flexGrow: 0 };

export const flexShrink1: Css = { flexShrink: 1 };
export const flexShrink0: Css = { flexShrink: 0 };

export const boxBorder: Css = { boxSizing: "border-box" };
export const boxContent: Css = { boxSizing: "content-box" };

export const fontNormal: Css = { fontStyle: "normal" };
export const fontItalic: Css = { fontStyle: "italic" };

export const uppercase: Css = { textTransform: "uppercase" };
export const lowercase: Css = { textTransform: "lowercase" };
export const capitalize: Css = { textTransform: "capitalize" };
export const normalCase: Css = { textTransform: "none" };

export const w = map(
  { ...spacingConfig, full: "100%", screen: "100vw" },
  (x): Css => ({ width: x })
);
export const h = map(
  { ...spacingConfig, full: "100%", screen: "100vh" },
  (x): Css => ({ height: x })
);

export const p = map(spacingConfig, (x): Css => ({ padding: x }));
export const pt = map(spacingConfig, (x): Css => ({ paddingTop: x }));
export const pr = map(spacingConfig, (x): Css => ({ paddingRight: x }));
export const pb = map(spacingConfig, (x): Css => ({ paddingBottom: x }));
export const pl = map(spacingConfig, (x): Css => ({ paddingLeft: x }));
export const py = map(
  spacingConfig,
  (x): Css => ({ paddingTop: x, paddingBottom: x })
);
export const px = map(
  spacingConfig,
  (x): Css => ({ paddingLeft: x, paddingRight: x })
);

export const m = map(spacingConfig, (x): Css => ({ margin: x }));
export const mt = map(spacingConfig, (x): Css => ({ marginTop: x }));
export const mr = map(spacingConfig, (x): Css => ({ marginRight: x }));
export const mb = map(spacingConfig, (x): Css => ({ marginBottom: x }));
export const ml = map(spacingConfig, (x): Css => ({ marginLeft: x }));
export const my = map(
  spacingConfig,
  (x): Css => ({ marginTop: x, marginBottom: x })
);
export const mx = map(
  spacingConfig,
  (x): Css => ({ marginLeft: x, marginRight: x })
);

export const textLeft: Css = { textAlign: "left" };
export const textCenter: Css = { textAlign: "center" };
export const textRight: Css = { textAlign: "right" };
export const textJustify: Css = { textAlign: "justify" };

export const textColor = map(colors, (color): Css => ({ color }));
export const borderColor = map(colors, (borderColor): Css => ({ borderColor }));
export const backgroundColor = map(
  colors,
  (backgroundColor): Css => ({ backgroundColor })
);

export const pointerEventsNone: Css = { pointerEvents: "none" };

export const borderSolid: Css = { borderStyle: "solid" };
export const borderDashed: Css = { borderStyle: "dashed" };
export const borderDotted: Css = { borderStyle: "dotted" };
export const borderNone: Css = { borderStyle: "none" };

export const border = map(
  borderSizeConfig,
  (borderWidth): Css => ({ borderWidth })
);
export const borderTop = map(
  borderSizeConfig,
  (borderTopWidth): Css => ({ borderTopWidth })
);
export const borderRight = map(
  borderSizeConfig,
  (borderRightWidth): Css => ({ borderRightWidth })
);
export const borderBottom = map(
  borderSizeConfig,
  (borderBottomWidth): Css => ({ borderBottomWidth })
);
export const borderLeft = map(
  borderSizeConfig,
  (borderLeftWidth): Css => ({ borderLeftWidth })
);

export const appearanceNone: Css = {
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none"
};

export const fontSize = map(fontSizeConfig, (fontSize): Css => ({ fontSize }));

export const fontWeight = map(
  fontWeightConfig,
  (fontWeight): Css => ({ fontWeight })
);

export const rounded = map(
  roundingConfig,
  (borderRadius): Css => ({ borderRadius })
);
export const roundedTop = map(
  roundingConfig,
  (radius): Css => ({
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius
  })
);
export const roundedBottom = map(
  roundingConfig,
  (radius): Css => ({
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius
  })
);
export const roundedLeft = map(
  roundingConfig,
  (radius): Css => ({
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius
  })
);
export const roundedRight = map(
  roundingConfig,
  (radius): Css => ({
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  })
);

export const boxShadow = map(
  boxShadowConfig,
  (boxShadow): Css => ({ boxShadow })
);

export const outlineNone: Css = { outline: 0 };

export const fillCurrent: Css = { fill: "currentColor" };

export const backgroundFixed: Css = { backgroundAttachment: "fixed" };
export const backgroundScroll: Css = { backgroundAttachment: "scroll" };
export const backgroundLocal: Css = { backgroundAttachment: "local" };

export const backgroundAuto: Css = { backgroundSize: "auto" };
export const backgroundCover: Css = { backgroundSize: "cover" };
export const backgroundContain: Css = { backgroundSize: "contain" };

export const leading = map(
  lineHeightConfig,
  (lineHeight): Css => ({ lineHeight })
);
