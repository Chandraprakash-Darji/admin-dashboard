import {
    ApiOutlined,
    CodeOutlined,
    ComputerOutlined,
    LogoutOutlined,
    StorageRounded,
} from "@mui/icons-material";
import AssistantIcon from "@mui/icons-material/Assistant";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import SchoolIcon from "@mui/icons-material/School";

export interface menuIn {
    text: string;
    id: number;
    type: "user" | "icon";
    icon: typeof SchoolIcon;
    subjects?: {
        id: string;
        text: string;
        subjectCode: string;
        icon: typeof SchoolIcon;
    }[];
}

const menuList: menuIn[] = [
    {
        text: "Home",
        type: "icon",
        id: 0,
        icon: HomeRoundedIcon,
    },
    {
        text: "Subjects",
        type: "icon",
        id: 1,
        icon: SchoolIcon,
        subjects: [
            {
                id: "computer-architecture",
                text: "Computer architecture",
                subjectCode: "21c321312",
                icon: ComputerOutlined,
            },
            {
                id: "OOPJ",
                text: "OOPJ",
                subjectCode: "21c321312",
                icon: CodeOutlined,
            },
            {
                id: "system-software",
                text: "System Software",
                subjectCode: "21c321312",
                icon: ApiOutlined,
            },
            {
                id: "dbms",
                text: "DBMS",
                subjectCode: "21c321312",
                icon: StorageRounded,
            },
        ],
    },
    {
        text: "Calender",
        type: "icon",
        id: 4,
        icon: CalendarMonthRoundedIcon,
    },
    {
        text: "Results",
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
        text: "Help",
        type: "icon",
        id: 6,
        icon: HelpOutlineRoundedIcon,
    },
    {
        text: "Feedback",
        type: "icon",
        id: 2,
        icon: AssistantIcon,
    },
    {
        text: "Logout",
        type: "icon",
        id: 2,
        icon: LogoutOutlined,
    },
];

export default menuList;
