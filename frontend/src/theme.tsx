import { createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("root") as any;


export const generateAppTheme = (theme: any) => {
  return createTheme({
    typography: {
      fontFamily: ["Gilroy", "Gilroy-Medium", "Gilroy-Bold"].join(","),
    },
    palette: {
      primary: {
        main: `${theme?.colorCode}` || "#ed4657", // Use provided mainColor or default to "#ed4657"
      },
      secondary: {
        main: "#0eb57f", // Use provided secondaryColor or default to "#0eb57f"
      },
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiModal: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });
};
