import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import { generateAppTheme } from "../theme.tsx";

export interface IAppThemeProviderProps {
  children: JSX.Element;
}

const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  // const { theme }: any = useSelector((state: RootState) => state.a);

  // let theme=undefined

  const appTheme = useMemo(() => {
    return generateAppTheme();
  }, []);

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppThemeProvider;
