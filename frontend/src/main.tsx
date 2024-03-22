import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";

import './index.css'
import { store } from "./store/index.ts";
import AppThemeProvider from "./providers/AppThemeProvider.tsx";
import { SnackbarProvider } from 'notistack';
import Fade from '@mui/material/Fade';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <AppThemeProvider>
          <SnackbarProvider autoHideDuration={3000} TransitionComponent={Fade}>
            <App />
          </SnackbarProvider>
        </AppThemeProvider>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
