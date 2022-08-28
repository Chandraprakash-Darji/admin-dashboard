// Imports:
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Tooltip,
    Typography,
} from "@mui/material";
import { menuIn } from "../../../mocks/menuItems";

interface SideBarItemProps {
    /**
     * menu to render
     */
    menu: menuIn;
    /**
     * Whether the sidebar is open or not.
     */
    drawerOpen: boolean;
}

const SideBarItem = ({ menu, drawerOpen }: SideBarItemProps) => {
    return (
        <ListItem
            sx={{
                px: ".5rem",
            }}
            disablePadding
        >
            {/**
             * If drawer is open there will be no tooltip
             */}
            <Tooltip
                title={drawerOpen ? "" : <Typography>{menu.text}</Typography>}
                placement="right"
            >
                <ListItemButton
                    className="w-full p-0 rounded-xl overflow-hidden h-14 "
                    sx={{
                        "&:hover,&:focus-visible": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                        },
                    }}
                >
                    {/* Icon */}
                    <ListItemIcon className="flex justify-center items-center text-inherit">
                        <menu.icon />
                    </ListItemIcon>
                    {/* Name */}
                    {drawerOpen && (
                        <Typography className="overflow-hidden font-bold text-ellipsis">
                            {menu.text}
                        </Typography>
                    )}
                </ListItemButton>
            </Tooltip>
        </ListItem>
    );
};

export default SideBarItem;
