import { createTheme as createMuiTheme } from "@mui/material";
import { createThemeComponents } from "./components";
import { darkPalette, lightPalette } from "./pallete";
import shape from "./shape";

export const createdTheme = (mode: "dark" | "light") => {
    const palette = mode === "light" ? lightPalette : darkPalette;

    // Create base theme
    const baseTheme = createMuiTheme({
        palette,
        shape,
    });
    // Inject base theme to be used in components
    return createMuiTheme(
        {
            components: createThemeComponents(baseTheme),
        },
        baseTheme
    );
};
