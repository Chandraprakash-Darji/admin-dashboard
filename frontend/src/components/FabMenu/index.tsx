import { DarkMode } from "@mui/icons-material";
import {
    Box,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useSettings } from "../../core/contexts/Settings";
import fabitems from "../../mocks/FabItems";

const FabMenu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { toggleMode } = useSettings();

    const actions = [
        ...fabitems,
        {
            text: "Switch Mode",
            id: 3,
            icon: DarkMode,
            onClick: () => toggleMode(),
        },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SppedDial tooltip help/feedback/darkMode "
                className="fixed bottom-4 right-4"
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((f) => {
                    return (
                        <SpeedDialAction
                            key={f.id}
                            icon={<f.icon sx={{ color: "text.primary" }} />}
                            tooltipTitle={
                                <Typography
                                    color="text.primary"
                                    className="whitespace-nowrap"
                                >
                                    {f.text}
                                </Typography>
                            }
                            tooltipOpen
                            onClick={() => {
                                f.onClick && f.onClick();
                            }}
                        />
                    );
                })}
            </SpeedDial>
        </Box>
    );
};

export default FabMenu;
