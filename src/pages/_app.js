import * as React from "react";
import "../../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f62459",
    },
    secondary: {
      main: "#8b13cd",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
