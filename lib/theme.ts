import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00d4ff",
      light: "#5eeeff",
      dark: "#0099bb",
    },
    secondary: {
      main: "#7c3aed",
      light: "#a855f7",
      dark: "#5b21b6",
    },
    background: {
      default: "#0a0a0f",
      paper: "#12121a",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    success: {
      main: "#10b981",
    },
    warning: {
      main: "#f59e0b",
    },
    error: {
      main: "#ef4444",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #5eeeff 0%, #a855f7 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#12121a",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});
