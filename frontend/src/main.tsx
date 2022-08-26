import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ToggleColorMode from "./utils/ToggleColorMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <ToggleColorMode>
                    <App />
                </ToggleColorMode>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
