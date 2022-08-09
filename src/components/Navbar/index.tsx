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
    Avatar,
    Box,
    IconButton,
    InputBase,
    styled,
    Toolbar,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import Sidebar from "./Sidebar";

const StyledInputbase = styled(InputBase)(() => ({
    input: {
        "&::placeholder": {
            color: "white",
        },
    },
}));

const OpenedWidth = "250px";
// Icon size -> 24 && paddingInline -> 16
const ClosedWidth = `${16 + 16 + 24}px`;

interface StyledAppBarProps extends AppBarProps {
    open?: boolean;
}

const StyledToolBar = styled(Toolbar, {
    shouldForwardProp: (prop) => prop !== "open",
})<StyledAppBarProps>(({ open }) => ({
    marginLeft: open ? OpenedWidth : ClosedWidth,
    width: open ? `100%-${OpenedWidth}` : `100%-${ClosedWidth}`,
    padding: "0 10px !important",
}));

const Navbar = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [fullScreen, setFullScreen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const searchRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log(searchRef.current);
        inputFocus && searchRef.current && searchRef.current.focus();
    }, [inputFocus]);

    const genertateNum = useMemo(
        () =>
            (s: number, e: number): number =>
                +(Math.random() * (e - s) + s).toFixed(),
        []
    );

    const randomeColor = useMemo(
        () =>
            `rgba(${genertateNum(100, 255)}, ${genertateNum(
                100,
                255
            )}, ${genertateNum(150, 255)})`,
        []
    );
    return (
        <Box flex={1}>
            <AppBar>
                <StyledToolBar
                    open={drawerOpen}
                    className="items-center gap-2 min-h-[56px] transition-all duration-500 ease-out"
                >
                    {/* Menu Icon */}
                    {drawerOpen || (
                        <IconButton
                            className="w-10 h-10"
                            onClick={() => setDrawerOpen((p) => !p)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {/* SearchBar -> inputBox Hidden click then focus */}
                    <Box
                        className={`flex items-center rounded-full overflow-hidden transition-all duration-[400] ${
                            inputFocus && "bg-white/20"
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
                    {/* IconButton -> Full Screen */}
                    <IconButton
                        onClick={() => setFullScreen((p) => !p)}
                        color="inherit"
                        className="w-10 h-10 hidden md:flex"
                    >
                        {fullScreen ? <Fullscreen /> : <FullscreenExit />}
                    </IconButton>
                    {/* Notification */}
                    <IconButton
                        onClick={() => {}}
                        color="inherit"
                        className="w-10 h-10 ml-auto"
                    >
                        <NotificationsRounded />
                    </IconButton>
                    {/* Chat */}
                    <IconButton
                        onClick={() => {}}
                        color="inherit"
                        className="w-10 h-10"
                    >
                        <ChatRounded />
                    </IconButton>
                    {/* Avatar + Name */}
                    <Avatar
                        alt="Chandraprakash Darji"
                        sx={{ bgcolor: randomeColor, fontWeight: "bold" }}
                    >
                        CP
                    </Avatar>
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
