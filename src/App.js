import React from "react";
import "./App.css";
import Header from "./components/header";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#245e54"
    },
    secondary: {
      light: "#fff",
      main: "#62c75c"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
    </MuiThemeProvider>
  );
}

export default App;
