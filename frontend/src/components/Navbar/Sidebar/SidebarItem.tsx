// Imports:
import { ExpandMore } from "@mui/icons-material";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Tooltip,
    Typography,
} from "@mui/material";
import { menuIn } from "../../../mocks/menuItems";
import SubjectList from "./SubjectList";

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
    if (menu.subjects)
        return <SubjectList drawerOpen={drawerOpen} menu={menu} />;

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
                    <ListIcon icon={menu.icon} />
                    {/* Name */}
                    {drawerOpen && <ListName text={menu.text} />}
                </ListItemButton>
            </Tooltip>
        </ListItem>
    );
};

export default SideBarItem;

interface ListIconProps {
    icon: typeof ExpandMore;
}

export const ListIcon = ({ icon: Icon }: ListIconProps) => {
    return (
        <ListItemIcon className="flex justify-center items-center text-inherit">
            <Icon />
        </ListItemIcon>
    );
};

export const ListName = ({ text }: { text: string }) => {
    return (
        <Typography className="overflow-hidden font-bold text-ellipsis">
            {text}
        </Typography>
    );
};
