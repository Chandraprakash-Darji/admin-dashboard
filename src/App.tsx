import { Box, StyledEngineProvider, useTheme } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
    const theme = useTheme();
    return (
        <StyledEngineProvider injectFirst>
            <Box
                className="min-h-screen"
                sx={{ bgcolor: theme.palette.background.default }}
            >
                <Navbar />
                {/* <Player /> */}
            </Box>
        </StyledEngineProvider>
    );
}

export default App;
