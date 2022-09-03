import { ChevronLeft } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import React from "react";

type Props = {
    /**
     * Whether the sidebar is open or not.
     */
    drawerOpen: boolean;
    /**
     * Function to close the sidebar.
     */
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Width of the sidebar.
     */
    width: string;
};

const ToggleSidebar = ({ drawerOpen, setDrawerOpen, width }: Props) => {
    return (
        <Box
            className="h-screen absolute top-0 -translate-x-1/2 flex justify-center items-center transition-all duration-300"
            sx={{ left: width, zIndex: "9999" }}
        >
            <Fab
                onClick={() => setDrawerOpen((p) => !p)}
                color="primary"
                size="small"
            >
                <ChevronLeft
                    className={`transition-all duration-300 ${
                        drawerOpen ? "rotate-0" : "rotate-180"
                    }`}
                />
            </Fab>
        </Box>
    );
};

export default ToggleSidebar;
