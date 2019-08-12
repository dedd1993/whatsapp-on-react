import React from "react";
import "./App.css";
import Header from "./components/header";
import NavTab from "./components/navtab";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#245e54",
      contrastText: "#fff"
    },
    secondary: {
      main: "#62c75c",
      contrastText: "#fff"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <NavTab />
    </MuiThemeProvider>
  );
}

export default App;
