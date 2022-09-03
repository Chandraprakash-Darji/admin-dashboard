// Imports:
import { ChevronLeft } from "@mui/icons-material";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListSubheader,
    Tooltip,
    useMediaQuery,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Logo from "../../core/assets/icons/Logo";
import useGetSidebarOptions from "../../hooks/useGetSidebarOptions";
import SideBarItem from "./components/SidebarItem";
import UserProfile from "./components/UserProfile";
 

type Props = {
    /**
     * Whether the sidebar is open or not.
     */
    drawerOpen: boolean;
    /**
     * Function to close the sidebar.
     */
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    /**
     * Width of the sidebar.
     */
    width: string;
};

const Sidebar = ({ width, setDrawerOpen, drawerOpen }: Props) => {
    const isSM = useMediaQuery("(max-width: 600px)");
    const { sidebarOptions } = useGetSidebarOptions();

    return (
        <Drawer
            /**
             * Variant basis of screen size -
             * for mobile device sidebar will slide in and
             * for desktop device sidebar will be fixed.
             */
            variant={isSM ? "temporary" : "permanent"}
            anchor="left"
            className="box-border"
            /**
             * Setting open and close state of the sidebar.
             * for mobile devices becuse it is temporary sidebar.
             */
            {...(isSM && {
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            })}
        >
            {/**
             * List of sidebar options.
             */}
            <List
                className={`gap-1 min-h-screen flex flex-col ease-linear transition-all pb-3`}
                disablePadding
                sx={{
                    width,
                }}
            >
                {/**
                 * Header for List
                 */}
                <ListSubheader className="w-full py-2 px-2 flex items-center h-[70px]">
                    <Tooltip title="Ax Studios">
                        <IconButton className={`w-16 mr-auto`} disableRipple>
                            <Logo />
                        </IconButton>
                    </Tooltip>
                    {/**
                     * Close button for closing the sidebar
                     */}
                    {drawerOpen && (
                        <Tooltip title="Close">
                            <IconButton
                                color="inherit"
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ChevronLeft />
                            </IconButton>
                        </Tooltip>
                    )}
                    {/* Divider */}
                    <Divider className="absolute h-2 bottom-0 left-0 w-full" />
                </ListSubheader>
                {/* User Profile */}
                <UserProfile drawerOpen={drawerOpen} />
                {/* All the options */}
                {sidebarOptions.map((menu) => (
                    <SideBarItem
                        key={menu.id}
                        drawerOpen={drawerOpen}
                        menu={menu}
                    />
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
