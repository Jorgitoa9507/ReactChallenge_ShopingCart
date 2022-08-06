import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    white?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }
  interface Palette {
    dark: PaletteColor;
    white: PaletteColor;
  }

  interface SimplePaletteColorOptions {
    "01"?: string;
    "02"?: string;
    "03"?: string;
    "04"?: string;
    "05"?: string;
    "06"?: string;
    "07"?: string;
    "08"?: string;
    "09"?: string;
    "10"?: string;
  }

  interface PaletteColor {
    "01"?: string;
    "02"?: string;
    "03"?: string;
    "04"?: string;
    "05"?: string;
    "06"?: string;
    "07"?: string;
    "08"?: string;
    "09"?: string;
    "10"?: string;
  }
}
