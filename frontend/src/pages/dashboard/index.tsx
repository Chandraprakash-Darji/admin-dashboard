import { Box, useTheme } from "@mui/material";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    const theme = useTheme();

    return (
        <Box className="min-h-screen">
            <Navbar />
        </Box>
    );
};

export default Dashboard;
