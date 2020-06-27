import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      background: "rgba(12, 18, 20, 0.9)",
      black: "rgba(12, 18, 20, 0.9)",
      white: "rgba(255, 255, 255, 0.9)",
    },
    primary: {
      light: "#b300ff",
      main: "#b300ff",
      dark: "#b300ff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff0033",
      main: "#ff0033",
      dark: "#ff0033",
      contrastText: "#fff",
    },
    background: {
      paper: {
        light: "rgba(255, 255, 255, 0.9)",
        main: "rgba(12, 18, 20, 0.9)",
        dark: "rgba(12, 18, 20, 0.9)",
      },
      default: "rgba(12, 18, 20, 1)",
      //       {
      //    light: 'rgba(255, 255, 255, 0.9)',
      //    main: 'rgba(12, 18, 20, 0.9)',
      //    dark: 'rgba(12, 18, 20, 0.9)'
      //  },
      // end background settings
    },
  },
});

export default theme;
