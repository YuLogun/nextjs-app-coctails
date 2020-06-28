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
      light: "#d400ff",
      main: "#d400ff",
      dark: "#d400ff",
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
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Start Headers
    h1: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.3rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "1.2rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: '"lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
  },
});

export default theme;
