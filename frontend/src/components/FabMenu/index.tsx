import { DarkMode } from "@mui/icons-material";
import {
    Box,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import fabitems from "../../mocks/FabItems";
import { ColorModeContext } from "../../utils/ToggleColorMode";
const FabMenu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { toggleColorMode } = useContext(ColorModeContext);

    const actions = [
        ...fabitems,
        {
            text: "Switch Mode",
            id: 3,
            icon: DarkMode,
            onClick: () => toggleColorMode(),
        },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SppedDial tooltip help/feedback/darkMode "
                className="absolute bottom-4 right-4"
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((f) => {
                    return (
                        <SpeedDialAction
                            key={f.id}
                            icon={<f.icon />}
                            tooltipTitle={
                                <Typography className="whitespace-nowrap">
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
