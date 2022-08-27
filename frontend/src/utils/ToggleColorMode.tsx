import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import { createContext, ReactElement, useMemo, useState } from "react";
import { darkPalette, lightPalette } from "./pallete";

export const ColorModeContext = createContext<{
    mode: "light" | "dark";
    toggleColorMode: () => void;
}>({ mode: "dark", toggleColorMode: () => {} });

const ToggleColorMode = ({ children }: { children: ReactElement }) => {
    const preferTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";

    const storageTheme = localStorage.getItem("colorMode");
    const defaultMode =
        storageTheme === "dark" || storageTheme === "light"
            ? storageTheme
            : preferTheme;

    const [mode, setMode] = useState<"light" | "dark">(defaultMode);

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const m = prevMode === "light" ? "dark" : "light";
            localStorage.setItem("colorMode", m);
            return m;
        });
    };
    const theme = useMemo(
        () =>
            createTheme({
                palette: mode === "light" ? lightPalette : darkPalette,
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
            <CssBaseline />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;
