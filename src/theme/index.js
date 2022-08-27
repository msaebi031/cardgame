import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "IranSanse",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },

  },
  palette: {
    light: "#ffffff",
    block: {
      main: "#000"
    },
    // p
    gray: "#B8B8B8",

    warning: {
      main: "#E3FF95",
    },
    secondary: {
      main: "#01BE96",
      secondary: "#00E1B9"
    },

    primary: {
      main: "#0B7EC8",
    },
  },
});

export default theme;
