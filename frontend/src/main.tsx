import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ToggleColorMode from "./utils/ToggleColorMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ToggleColorMode>
            <App />
        </ToggleColorMode>
    </React.StrictMode>
);
