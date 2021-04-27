import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Main } from "./Main";
import theme from "./styles/defaultTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
