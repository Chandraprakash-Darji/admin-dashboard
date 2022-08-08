import { StyledEngineProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Player from "./Player/Player";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <div className="min-h-screen">
                <Navbar />
                {/* <Player /> */}
            </div>
        </StyledEngineProvider>
    );
}

export default App;
