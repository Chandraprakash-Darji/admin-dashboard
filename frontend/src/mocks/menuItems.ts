import AirlineSeatIndividualSuiteRoundedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteRounded";
import AssistantIcon from "@mui/icons-material/Assistant";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import SchoolIcon from "@mui/icons-material/School";

export interface menuIn {
    text: string;
    id: number;
    type: "user" | "icon";
    icon: typeof SchoolIcon;
}

const menuList: menuIn[] = [
    {
        text: "Home",
        type: "icon",
        id: 0,
        icon: HomeRoundedIcon,
    },
    {
        text: "Classroom",
        type: "icon",
        id: 1,
        icon: SchoolIcon,
    },
    {
        text: "Payments",
        type: "icon",
        id: 8,
        icon: PaymentRoundedIcon,
    },
    {
        text: "Feedback",
        type: "icon",
        id: 2,
        icon: AssistantIcon,
    },
    {
        text: "Exam",
        type: "icon",
        id: 3,
        icon: NoteAltRoundedIcon,
    },
    {
        text: "Calender",
        type: "icon",
        id: 4,
        icon: CalendarMonthRoundedIcon,
    },
    {
        text: "Drive",
        type: "icon",
        id: 5,
        icon: FolderOpenRoundedIcon,
    },
    {
        text: "Help",
        type: "icon",
        id: 6,
        icon: HelpOutlineRoundedIcon,
    },
    {
        text: "Hostel",
        type: "icon",
        id: 7,
        icon: AirlineSeatIndividualSuiteRoundedIcon,
    },
];

export default menuList;
