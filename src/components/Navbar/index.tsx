import {
    ChatRounded,
    Fullscreen,
    FullscreenExit,
    NotificationsRounded,
    SearchRounded,
} from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const StyledInputbase = styled(InputBase)(() => ({
    input: {
        "&::placeholder": {
            color: "white",
        },
    },
}));

const Navbar = () => {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [fullScreen, setFullScreen] = useState(false);
    const searchRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log(searchRef.current);
        inputFocus && searchRef.current && searchRef.current.focus();
    }, [inputFocus]);

    const genertateNum = (s: number, e: number) =>
        +(Math.random() * (e - s) + s).toFixed();

    const randomeColor = () =>
        `rgba(${genertateNum(100, 255)}, ${genertateNum(
            100,
            255
        )}, ${genertateNum(150, 255)})`;

    return (
        <Box flex={1}>
            <AppBar>
                <Toolbar className="items-center gap-2">
                    <Button className="p-0" color="inherit">
                        <Typography
                            color="white"
                            className="font-bold text-xl tracking-wider bg-white/10 p-1 px-2 rounded-lg text-white"
                        >
                            ITMBU
                        </Typography>
                    </Button>
                    {/* SearchBar -> inputBox Hidden click then focus */}
                    <Box
                        className={`flex items-center rounded-full overflow-hidden transition-all duration-300 ${
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
                            className={`w-10 h-10`}
                        >
                            <SearchRounded />
                        </IconButton>
                    </Box>
                    {/* IconButton -> Full Screen */}
                    <IconButton
                        onClick={() => setFullScreen((p) => !p)}
                        color="inherit"
                        className="w-10 h-10 mr-auto"
                    >
                        {fullScreen ? <Fullscreen /> : <FullscreenExit />}
                    </IconButton>
                    {/* MarginRight Auto */}
                    {/* Notification */}
                    <IconButton
                        onClick={() => {}}
                        color="inherit"
                        className="w-10 h-10"
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
                        sx={{ bgcolor: randomeColor(), fontWeight: "bold" }}
                    >
                        CP
                    </Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
