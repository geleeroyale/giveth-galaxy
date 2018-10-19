import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: [
    "Raleway",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Raleway", "Helvetica Neue", "serif"]
});

export default typography;
