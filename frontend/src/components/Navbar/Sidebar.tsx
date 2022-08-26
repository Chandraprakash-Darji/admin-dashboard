import { ChevronLeft } from "@mui/icons-material";
import AirlineSeatIndividualSuiteRoundedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteRounded";
import AssistantIcon from "@mui/icons-material/Assistant";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import SchoolIcon from "@mui/icons-material/School";
import {
    Box,
    BoxProps,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

type SideBarProps = {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    width: string;
};

const menuList = [
    {
        text: "Home",
        id: 0,
        icon: <HomeRoundedIcon />,
    },
    {
        text: "Classroom",
        id: 1,
        icon: <SchoolIcon />,
    },
    {
        text: "Payments",
        id: 8,
        icon: <PaymentRoundedIcon />,
    },
    {
        text: "Feedback",
        id: 2,
        icon: <AssistantIcon />,
    },
    {
        text: "Exam",
        id: 3,
        icon: <NoteAltRoundedIcon />,
    },
    {
        text: "Calender",
        id: 4,
        icon: <CalendarMonthRoundedIcon />,
    },
    {
        text: "Drive",
        id: 5,
        icon: <FolderOpenRoundedIcon />,
    },
    {
        text: "Help",
        id: 6,
        icon: <HelpOutlineRoundedIcon />,
    },
    {
        text: "Hostel",
        id: 7,
        icon: <AirlineSeatIndividualSuiteRoundedIcon />,
    },
];

const SidebarHead = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "56px",
}));

interface DrawerContentProp extends BoxProps {
    width: string;
}

const DrawerContent = styled(Box, {
    shouldForwardProp: (prop) => prop !== "width",
})<DrawerContentProp>(({ theme, width }) => ({
    width,
    [theme.breakpoints.down("sm")]: {
        width: "250px",
    },
}));

const Sidebar = ({ width, setDrawerOpen, drawerOpen }: SideBarProps) => {
    const isSM = useMediaQuery("(max-width: 599.94px)");
    return (
        <Drawer
            variant={isSM ? "temporary" : "permanent"}
            anchor="left"
            className="box-border whitespace-nowrap"
            {...(isSM && {
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            })}
        >
            <DrawerContent
                width={width}
                className="overflow-x-hidden transition-all duration-[400]"
            >
                <SidebarHead
                    className={`${
                        drawerOpen ? "px-4" : "justify-center items-stretch p-2"
                    } `}
                >
                    <Button
                        className={`font-bold text-xl tracking-wider rounded-lg transition-all duration-300 text-inherit`}
                    >
                        {drawerOpen ? "ITMBU" : "ITM"}
                    </Button>
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
                </SidebarHead>
                <Divider />
                <List
                    className={`gap-1 px-2 flex flex-col transition-all duration-300 `}
                >
                    {menuList.map((menu) => (
                        <div key={menu.id}>
                            {drawerOpen ? (
                                <SideBarItem
                                    drawerOpen={drawerOpen}
                                    menu={menu}
                                />
                            ) : (
                                <Tooltip
                                    title={<Typography>{menu.text}</Typography>}
                                    placement="right"
                                >
                                    <div>
                                        <SideBarItem
                                            drawerOpen={drawerOpen}
                                            menu={menu}
                                        />
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                    ))}
                </List>
            </DrawerContent>
        </Drawer>
    );
};

export default Sidebar;

interface SideBarItemProps {
    menu: {
        text: string;
        id: number;
        icon: ReactNode;
    };
    drawerOpen: boolean;
}

const SideBarItem = ({ menu, drawerOpen }: SideBarItemProps) => {
    return (
        <ListItem disablePadding>
            <Box className="w-full rounded-xl overflow-hidden h-14 flex justify-center">
                <ListItemButton className="w-full">
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    {drawerOpen && <ListItemText primary={menu.text} />}
                </ListItemButton>
            </Box>
        </ListItem>
    );
};
