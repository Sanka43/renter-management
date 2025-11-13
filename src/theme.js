import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#343434FF" },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f5f5", paper: "#fff" },
    text: { primary: "#333", secondary: "#555" },
    transparent : { main : "#1010102B" },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: { textTransform: "none" },
  },
});

export default theme;
