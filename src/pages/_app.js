import * as React from "react";
import "../../styles/globals.css";
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserProvider } from "../context/UserProvider";

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
      <UserProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
