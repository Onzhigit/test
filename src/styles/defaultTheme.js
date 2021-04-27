import { createMuiTheme } from "@material-ui/core";


const paletteDarkTurquoise = {
  palette: {
    primary: {
      light: "#588c93",
      main: "#295f65",
      dark: "#00353b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fc7661",
      main: "#c44536",
      dark: "#8d0c0f",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
    },
  },
};

const theme = createMuiTheme(paletteDarkTurquoise);

export default theme;
