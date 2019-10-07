export const fontConfig = {
  sans:
    'system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};

export const spacingConfig = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256
};

export const fontSizeConfig = {
  xs: ".75rem",
  s: ".875rem",
  m: "1rem",
  l: "1.125rem",
  xl: "1.25rem",
  xxl: "1.5rem",
  xxxl: "1.875rem",
  xxxxl: "2.25rem",
  xxxxxl: "3rem",
  xxxxxxl: "4rem"
};

export const roundingConfig = {
  none: "0",
  sm: ".125rem",
  m: ".25rem",
  lg: ".5rem",
  full: "999rem"
};

export const borderSizeConfig = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  8: 8
};

export const lineHeightConfig = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
};

export const fontWeightConfig = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const boxShadowConfig = {
  s: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  m: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  l: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  none: "none"
};

export const mediaQueries = {
  s: "@media (min-width: 640px)",
  m: "@media (min-width: 768px)",
  l: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  print: "@media print",
  portrait: "@media (orientation: portrait)",
  landscape: "@media (orientation: landscape)",
  darkMode: "@media (prefers-color-scheme: dark)",
  lightMode: "@media (prefers-color-scheme: light)"
};

export const inputModifiers = {
  hover: "&:hover:not(:disabled)",
  active: "&:active:not(:disabled)",
  focus: "&:focus:not(:disabled)",
  placeholder: "&::placeholder",
  disabled: "&:disabled"
};

// https://tailwindcss.com/docs/customizing-colors#default-color-palette
export const colors = {
  black: "#000",
  white: "#fff",
  transparent: "transparent",
  gray1: "#F7FAFC",
  gray2: "#EDF2F7",
  gray3: "#E2E8F0",
  gray4: "#CBD5E0",
  gray5: "#A0AEC0",
  gray6: "#718096",
  gray7: "#4A5568",
  gray8: "#2D3748",
  gray9: "#1A202C",
  red1: "#FFF5F5",
  red2: "#FED7D7",
  red3: "#FEB2B2",
  red4: "#FC8181",
  red5: "#F56565",
  red6: "#E53E3E",
  red7: "#C53030",
  red8: "#9B2C2C",
  red9: "#742A2A",
  orange1: "#FFFAF0",
  orange2: "#FEEBC8",
  orange3: "#FBD38D",
  orange4: "#F6AD55",
  orange5: "#ED8936",
  orange6: "#DD6B20",
  orange7: "#C05621",
  orange8: "#9C4221",
  orange9: "#7B341E",
  yellow1: "#FFFFF0",
  yellow2: "#FEFCBF",
  yellow3: "#FAF089",
  yellow4: "#F6E05E",
  yellow5: "#ECC94B",
  yellow6: "#D69E2E",
  yellow7: "#B7791F",
  yellow8: "#975A16",
  yellow9: "#744210",
  green1: "#F0FFF4",
  green2: "#C6F6D5",
  green3: "#9AE6B4",
  green4: "#68D391",
  green5: "#48BB78",
  green6: "#38A169",
  green7: "#2F855A",
  green8: "#276749",
  green9: "#22543D",
  teal1: "#E6FFFA",
  teal2: "#B2F5EA",
  teal3: "#81E6D9",
  teal4: "#4FD1C5",
  teal5: "#38B2AC",
  teal6: "#319795",
  teal7: "#2C7A7B",
  teal8: "#285E61",
  teal9: "#234E52",
  blue1: "#EBF8FF",
  blue2: "#BEE3F8",
  blue3: "#90CDF4",
  blue4: "#63B3ED",
  blue5: "#4299E1",
  blue6: "#3182CE",
  blue7: "#2B6CB0",
  blue8: "#2C5282",
  blue9: "#2A4365",
  indigo1: "#EBF4FF",
  indigo2: "#C3DAFE",
  indigo3: "#A3BFFA",
  indigo4: "#7F9CF5",
  indigo5: "#667EEA",
  indigo6: "#5A67D8",
  indigo7: "#4C51BF",
  indigo8: "#434190",
  indigo9: "#3C366B",
  purple1: "#FAF5FF",
  purple2: "#E9D8FD",
  purple3: "#D6BCFA",
  purple4: "#B794F4",
  purple5: "#9F7AEA",
  purple6: "#805AD5",
  purple7: "#6B46C1",
  purple8: "#553C9A",
  purple9: "#44337A",
  pink1: "#FFF5F7",
  pink2: "#FED7E2",
  pink3: "#FBB6CE",
  pink4: "#F687B3",
  pink5: "#ED64A6",
  pink6: "#D53F8C",
  pink7: "#B83280",
  pink8: "#97266D",
  pink9: "#702459"
};
