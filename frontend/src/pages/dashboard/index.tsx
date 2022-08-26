import { Login } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    const theme = useTheme();

    return (
        <Box
            className="min-h-screen"
            sx={{ bgcolor: theme.palette.background.default }}
            >
            <Navbar />
        </Box>
    );
};

export default Dashboard;
