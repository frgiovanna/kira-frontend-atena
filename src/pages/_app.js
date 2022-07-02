import * as React from "react";
import "../../styles/globals.css";
import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

export const Container = styled.div`
  width: 400px;
  background-color: #ecf1f4;
  margin: auto;
  margin-bottom: 50px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
