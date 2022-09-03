import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createdTheme } from "../theme";

interface SettingsContextInterface {
    /**
     * Sidebar Collapased or not and its change fun
     */
    collapsed: boolean;
    toggleSidebar: () => void;
    /**
     * Dark mode and light mode
     */
    mode: string;
    changeMode: (mode: "dark" | "light") => void;
    toggleMode: () => void;
}

export const SettingsContext = createContext({} as SettingsContextInterface);

type SettingsProviderProps = {
    children: React.ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
    /**
     * Saving Collapsed and open state to local Storage
     */
    const [collapsed, setCollapsed] = useLocalStorage(
        "sidebarcollapsed",
        false
    );
    /**
     * Dark and light mode Setting
     */
    const [mode, setMode] = useLocalStorage<"dark" | "light">("mode", "light");
    /**
     * creating theme
     */
    const theme = useMemo(() => createdTheme(mode as "dark" | "light"), [mode]);
    /**
     * Changing the dark and light mode
     * @param mode 'dark' | 'light'
     */
    const changeMode = (mode: "dark" | "light") => {
        if (mode) {
            setMode(mode);
        }
    };
    /**
     * Toggle sidebar
     */
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    /**
     * Toggle the mode from light to dark
     */
    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <SettingsContext.Provider
            value={{
                collapsed,
                mode,
                changeMode,
                toggleMode,
                toggleSidebar,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </SettingsContext.Provider>
    );
};

export function useSettings() {
    return useContext(SettingsContext);
}

export default SettingsProvider;
