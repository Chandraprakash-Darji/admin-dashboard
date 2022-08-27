import {
    ChatRounded,
    Fullscreen,
    FullscreenExit,
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
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../../utils/ToggleColorMode";
import Sidebar from "./Sidebar";

const StyledInputbase = styled(InputBase)(() => ({
    input: {
        "&::placeholder": {
            color: "white",
        },
    },
}));

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
    const [fullScreen, setFullScreen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const { toggleColorMode } = useContext(ColorModeContext);

    useEffect(() => {
        inputFocus && searchRef.current && searchRef.current.focus();
    }, [inputFocus]);

    return (
        <Box flex={1}>
            <AppBar>
                <StyledToolBar
                    open={drawerOpen}
                    className="items-center gap-2 min-h-[70px] transition-all duration-500 ease-out"
                >
                    {/* Menu Icon */}
                    <>
                        {drawerOpen || (
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
                    </>
                    {/* SearchBar -> inputBox Hidden click then focus */}
                    <Tooltip title="Search" disableInteractive>
                        <Box
                            className={`flex items-center rounded-full overflow-hidden transition-all duration-[400] shrink-0 0 ${
                                inputFocus &&
                                "bg-[#ffffff10] dark:bg-[#00000010] border border-dark/20 dark:border-white/20"
                            }`}
                        >
                            <StyledInputbase
                                className={`text-white transition-all duration-300 tracking-wider ${
                                    inputFocus ? "w-52 pl-4" : "w-0"
                                }`}
                                placeholder="Search..."
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                                onBlur={() => {
                                    if (searchVal === "") setInputFocus(false);
                                }}
                                inputRef={searchRef}
                            />
                            <IconButton
                                onClick={() =>
                                    setInputFocus((prev) => {
                                        if (!prev) return true;
                                        if (searchVal !== "") return true;
                                        return false;
                                    })
                                }
                                color="inherit"
                                className="w-10 h-10"
                            >
                                <SearchRounded />
                            </IconButton>
                        </Box>
                    </Tooltip>
                    {/* IconButton -> Full Screen */}
                    <Tooltip
                        title="Full Screen temp(Dark mode)"
                        disableInteractive
                    >
                        <IconButton
                            onClick={() => {
                                setFullScreen((p) => !p);
                                toggleColorMode();
                            }}
                            color="inherit"
                            className="w-10 h-10 hidden md:flex"
                        >
                            {fullScreen ? <Fullscreen /> : <FullscreenExit />}
                        </IconButton>
                    </Tooltip>
                    {/* Notification */}
                    <Tooltip title="Notification" disableInteractive>
                        <IconButton
                            onClick={() => {}}
                            color="inherit"
                            className="w-10 h-10 ml-auto"
                        >
                            <NotificationsRounded />
                        </IconButton>
                    </Tooltip>
                    {/* Chat */}
                    <Tooltip title="Chat" disableInteractive>
                        <IconButton
                            onClick={() => {}}
                            color="inherit"
                            className="w-10 h-10"
                        >
                            <ChatRounded />
                        </IconButton>
                    </Tooltip>
                </StyledToolBar>
            </AppBar>
            <Sidebar
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                width={drawerOpen ? OpenedWidth : ClosedWidth}
            />
        </Box>
    );
};

export default Navbar;
