import {
    Menu as MenuIcon,
    NotificationsRounded,
    SearchRounded,
} from "@mui/icons-material";
import {
    AppBar,
    AppBarProps,
    Box,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FabMenu from "../FabMenu";
import Sidebar from "../Sidebar";
import ToggleSidebar from "../Sidebar/components/ToggleSidebar";

const OpenedWidth = "300px";
// Icon size -> 24 && paddingOnIcon -> 16 + 16 && paddingOnSIdebar -> 8 + 8
const ClosedWidth = `${16 + 16 + 8 + 8 + 24}px`;

interface StyledAppBarProps extends AppBarProps {
    open?: boolean;
}

const StyledToolBar = styled(Toolbar, {
    shouldForwardProp: (prop) => prop !== "open",
})<StyledAppBarProps>(({ theme, open }) => ({
    marginLeft: open ? OpenedWidth : ClosedWidth,
    width: open ? `100%-${OpenedWidth}` : `100%-${ClosedWidth}`,
    padding: "0 10px !important",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: "0",
    },
}));

const Navbar = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(true);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const isSM = useMediaQuery("(max-width: 600px)");

    useEffect(() => {
        inputFocus && searchRef.current && searchRef.current.focus();
    }, [inputFocus]);

    return (
        <Box flex={1} className="relative">
            <AppBar
                color="transparent"
                sx={{ color: "text.primary" }}
                elevation={0}
            >
                <StyledToolBar
                    open={drawerOpen}
                    className="items-center gap-2 min-h-[70px] transition-all duration-500 ease-out"
                >
                    {/* Menu Icon */}
                    <>
                        {isSM && !drawerOpen && (
                            <Tooltip title="Menu" disableInteractive>
                                <IconButton
                                    className="w-10 h-10"
                                    color="inherit"
                                    onClick={() => setDrawerOpen((p) => !p)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        {!isSM && (
                            <Typography
                                variant="h6"
                                className="whitespace-nowrap font-bold tracking-wide"
                            >
                                Hey, Chandraprakash
                            </Typography>
                        )}
                    </>

                    {/* SearchBar */}
                    <Tooltip title="Search" disableInteractive>
                        <Box
                            className={`flex items-center rounded-full overflow-hidden transition-all duration-[400ms] shrink-0 ml-auto`}
                            sx={{
                                bgcolor: "text.primary",
                                color: "primary.contrastText",
                            }}
                        >
                            <InputBase
                                className={`transition-all duration-300 tracking-wider w-52 pl-4`}
                                placeholder="Search..."
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                                onBlur={() => {
                                    if (searchVal === "") setInputFocus(false);
                                }}
                                inputRef={searchRef}
                                sx={{
                                    color: "primary.contrastText",
                                }}
                            />
                            <IconButton
                                onClick={() => setInputFocus(true)}
                                color="inherit"
                                className="w-10 h-10"
                            >
                                <SearchRounded />
                            </IconButton>
                        </Box>
                    </Tooltip>
                    {/* Notification */}
                    <Tooltip title="Notification" disableInteractive>
                        <IconButton
                            onClick={() => {}}
                            color="inherit"
                            className="w-10 h-10"
                        >
                            <NotificationsRounded />
                        </IconButton>
                    </Tooltip>
                </StyledToolBar>
            </AppBar>
            {/* Sidebar */}
            <Sidebar
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                width={drawerOpen ? OpenedWidth : ClosedWidth}
            />
            {/* Fab Menu */}
            <FabMenu />
            {/* Sidebar toggle */}
            {isSM || (
                <ToggleSidebar
                    drawerOpen={drawerOpen}
                    setDrawerOpen={setDrawerOpen}
                    width={drawerOpen ? OpenedWidth : ClosedWidth}
                />
            )}
        </Box>
    );
};

export default Navbar;
