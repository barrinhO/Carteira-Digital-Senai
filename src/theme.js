import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#22c55e",
    },
    background: {
      default: "#020617",
      paper: "#0f172a",
    },
  },

  typography: {
    fontFamily: "Segoe UI, Roboto, sans-serif",
    fontSize: 18,
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.05)",
        },
      },
    },
  },
});

export default theme;
