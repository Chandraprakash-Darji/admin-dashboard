import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SettingsProvider from "./core/contexts/Settings";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <SettingsProvider>
                    <App />
                </SettingsProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
