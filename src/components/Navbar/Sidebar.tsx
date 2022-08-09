import { ChevronLeft } from "@mui/icons-material";
import AirlineSeatIndividualSuiteRoundedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import SchoolIcon from "@mui/icons-material/School";
import {
    Box,
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
    Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
        icon: <RateReviewRoundedIcon />,
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
    paddingInline: "16px",
    minHeight: "56px",
}));

const Sidebar = ({ width, setDrawerOpen, drawerOpen }: SideBarProps) => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            className="box-border whitespace-nowrap"
        >
            <Box
                sx={{ width }}
                className="overflow-x-hidden transition-all duration-[400]"
            >
                <SidebarHead>
                    <IconButton
                        className="font-bold text-xl tracking-wider p-1 px-2 rounded-lg text-white ease-in"
                    >
                        {drawerOpen ? "ITMBU" : "I"}
                    </IconButton>
                    {drawerOpen && (
                        <IconButton
                            color="inherit"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <ChevronLeft />
                        </IconButton>
                    )}
                </SidebarHead>
                <Divider />
                <List>
                    {menuList.map((menu) => (
                        <ListItem key={menu.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
