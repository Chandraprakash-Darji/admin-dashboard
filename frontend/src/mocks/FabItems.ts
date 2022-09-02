import AssistantIcon from "@mui/icons-material/Assistant";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SchoolIcon from "@mui/icons-material/School";

export interface FabIn {
    text: string;
    id: number;
    icon: typeof SchoolIcon;
    onClick?: () => void;
}

const fabitems: FabIn[] = [
    {
        text: "Help",
        id: 1,
        icon: HelpOutlineRoundedIcon,
    },
    {
        text: "Feedback",
        id: 2,
        icon: AssistantIcon,
    },
];

export default fabitems;
