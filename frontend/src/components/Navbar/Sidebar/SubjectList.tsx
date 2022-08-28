// Imports:
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { menuIn } from "../../../mocks/menuItems";
import { ListIcon, ListName } from "./SidebarItem";

interface Props {
    /**
     * menu to render
     */
    menu: menuIn;
    /**
     * Whether the sidebar is open or not.
     */
    drawerOpen: boolean;
}

const SubjectList = ({ menu, drawerOpen }: Props) => {
    // State for Subject open and close
    const [open, setOpen] = useState(false);

    return (
        <div className={`gap-1 flex flex-col `}>
            <ListItem
                sx={{
                    px: ".5rem",
                }}
                disablePadding
            >
                {/**
                 * Tooltip for the subject name
                 */}
                <Tooltip
                    title={
                        drawerOpen ? (
                            ""
                        ) : (
                            <Typography>
                                {open ? "Collpase" : "Expand"} Subjects
                            </Typography>
                        )
                    }
                    placement="right"
                >
                    {/* Subject Header */}
                    <ListItemButton
                        className={`w-full p-0 rounded-xl overflow-hidden h-14`}
                        sx={{
                            bgcolor: open ? "primary.main" : "transparent",
                            color: open ? "primary.contrastText" : "",
                            "&:hover,&:focus-visible": {
                                bgcolor: "primary.main",
                                color: "primary.contrastText",
                            },
                        }}
                        onClick={() => setOpen((p) => !p)}
                    >
                        {/* Icon for header */}
                        <ListIcon icon={menu.icon} />

                        {drawerOpen && (
                            <>
                                {/* Text and Expand Icon */}
                                <ListName text={menu.text} />
                                <div className="ml-auto mr-2">
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </div>
                            </>
                        )}
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            {/* Expand More icon for Open state on close menu */}
            {open && !drawerOpen && <ExpandMore className="mx-auto" />}
            <Collapse in={open} timeout="auto" unmountOnExit>
                {/* List of Subjects */}
                <List
                    className={`gap-1 my-1 flex flex-col ease-linear  transition-all `}
                    sx={{
                        px: ".5rem",
                        ml: drawerOpen ? "1.5rem" : 0,
                    }}
                    disablePadding
                >
                    {menu.subjects?.map((m) => (
                        <Tooltip
                            title={
                                drawerOpen ? (
                                    ""
                                ) : (
                                    <Typography>{m.text}</Typography>
                                )
                            }
                            placement="right"
                            key={m.id}
                        >
                            <ListItemButton
                                className={`w-full p-0 rounded-xl overflow-hidden h-14 `}
                                sx={{
                                    "&:hover,&:focus-visible": {
                                        bgcolor: "primary.main",
                                        color: "primary.contrastText",
                                    },
                                }}
                            >
                                <ListIcon icon={m.icon} />
                                {drawerOpen && <ListName text={m.text} />}
                            </ListItemButton>
                        </Tooltip>
                    ))}
                </List>
            </Collapse>
        </div>
    );
};

export default SubjectList;
