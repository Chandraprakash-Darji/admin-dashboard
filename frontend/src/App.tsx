import { Login } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Register } from "./pages";

function App() {
    const theme = useTheme();
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="student/:id" element={<div>Student :id</div>} />
            <Route
                path="student/:id/portfolio"
                element={<div>Portfolio</div>}
            />
            <Route path="student/:id/record" element={<div>records</div>} />
            <Route path="student/:id/post" element={<div>Post</div>} />
            <Route
                path="student/:id/acadmenics"
                element={<div>Acadmeics</div>}
            />
        </Routes>
    );
}

export default App;
