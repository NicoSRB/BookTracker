import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2DD4BF",
    },
    background: {
      default: "#0A0F1F",
      paper: "#111726",
    },
    text: {
      primary: "#F5F7FA",
      secondary: "#A0A7B5",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});
