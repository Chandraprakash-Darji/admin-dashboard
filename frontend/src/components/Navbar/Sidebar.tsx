import {
    ChevronLeft,
    FacebookOutlined,
    GitHub,
    Instagram,
    LinkedIn,
    MailOutlineOutlined,
    Twitter,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    BoxProps,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListSubheader,
    styled,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Logo from "../../assets/icons/logo";
import menuList, { menuIn } from "../../mocks/menuItems";

type SideBarProps = {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
    width: string;
};

const SidebarHead = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
}));

interface DrawerContentProp extends BoxProps {
    width: string;
}

const DrawerContent = styled(Box, {
    shouldForwardProp: (prop) => prop !== "width",
})<DrawerContentProp>(({ theme, width }) => ({
    width,
    [theme.breakpoints.down("sm")]: {
        width: "300px",
    },
}));

const Sidebar = ({ width, setDrawerOpen, drawerOpen }: SideBarProps) => {
    const isSM = useMediaQuery("(max-width: 599.94px)");

    const menus: menuIn[] = [
        {
            text: "Chandraprakash Darji",
            id: 213289545740,
            type: "user",
            icon: () => (
                <Avatar
                    alt="Chandraprakash Darji"
                    className="transition-all duration-500 aspect-auto text-inherit"
                    {...{
                        src: "https://www.github.com/Chandraprakash-Darji.png",
                    }}
                    sx={{
                        bgcolor: "#ffffff30",
                        fontWeight: "bold",
                        width: drawerOpen ? "100px" : "40px",
                        height: drawerOpen ? "100px" : "40px",
                        fontSize: drawerOpen ? "3rem" : "1.2rem",
                    }}
                >
                    CP
                </Avatar>
            ),
        },
        ...menuList,
    ];

    return (
        <Drawer
            variant={isSM ? "temporary" : "permanent"}
            anchor="left"
            className="box-border"
            {...(isSM && {
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            })}
        >
            <DrawerContent
                width={width}
                className="overflow-x-hidden ease-linear transition-all duration-[400]"
            >
                <List
                    className={`gap-1 flex flex-col transition-all duration-300`}
                    disablePadding
                >
                    <ListSubheader className="w-full p-0">
                        <SidebarHead
                            className={`top-0 py-2 px-2 ${
                                drawerOpen ? "" : "justify-center items-stretch"
                            } `}
                        >
                            <IconButton
                                className={`font-bold w-16 text-xl tracking-wider rounded-lg transition-all duration-300 text-inherit`}
                                disableRipple
                            >
                                <Logo />
                            </IconButton>
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
                    </ListSubheader>
                    {menus.map((menu) => (
                        <ListItem
                            sx={{
                                px: ".5rem",
                            }}
                            disablePadding
                            key={menu.id}
                        >
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
                        </ListItem>
                    ))}
                </List>
            </DrawerContent>
        </Drawer>
    );
};

export default Sidebar;

interface SideBarItemProps {
    menu: menuIn;
    drawerOpen: boolean;
}

const SideBarItem = ({ menu, drawerOpen }: SideBarItemProps) => {
    const ifIcon = (
        <ListItemButton
            className="w-full p-0 rounded-xl overflow-hidden h-14 "
            sx={{
                "&:hover": {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                },
            }}
        >
            <ListItemIcon className="flex justify-center items-center text-inherit">
                <menu.icon />
            </ListItemIcon>
            {drawerOpen && (
                <Typography className="overflow-hidden font-bold text-ellipsis">
                    {menu.text}
                </Typography>
            )}
        </ListItemButton>
    );

    const ifUser = (
        <ListItemButton
            className={`w-full rounded-xl overflow-hidden hover:bg-transparent flex justify-center items-center my-2 ${
                drawerOpen ? "flex-col py-6 gap-1" : "p-0 py-2 h-14"
            }`}
            sx={{
                ...(drawerOpen
                    ? {
                          borderColor: "primary.main",
                          borderWidth: "2px",
                          borderStyle: "solid",
                      }
                    : {}),
            }}
            disableRipple
        >
            {drawerOpen && (
                <img
                    src="https://user-images.githubusercontent.com/93640141/154883570-4886fb9e-8a31-4eae-bd99-5f4b70d9c44b.png"
                    alt="banner"
                    className="w-full absolute top-0 left-0 h-24 object-cover"
                />
            )}
            <ListItemIcon className="flex justify-center items-center ">
                <menu.icon />
            </ListItemIcon>

            <div
                className={`text-center transition-opacity duration-300 ${
                    drawerOpen
                        ? "opacity-100 w-auto h-auto"
                        : "opacity-0 w-0 h-0 overflow-hidden"
                }`}
            >
                <Typography
                    className="overflow-hidden text-ellipsis font-bold text-lg"
                    sx={{
                        "&:hover": {
                            color: "primary.main",
                        },
                    }}
                >
                    {menu.text}
                </Typography>
                <Typography className="text-xs">21C22004</Typography>
                <Typography className="text-xs">
                    B.Tech In Computer Science & Engineering (Artificial
                    Intelligence)
                </Typography>
                <Box
                    mt={1}
                    sx={{
                        ".MuiIconButton-root:hover": {
                            color: "primary.main",
                        },
                    }}
                >
                    <IconButton>
                        <FacebookOutlined />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <GitHub />
                    </IconButton>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                    <IconButton>
                        <MailOutlineOutlined />
                    </IconButton>
                </Box>
            </div>
        </ListItemButton>
    );

    return <>{typeof menu.icon === typeof ChevronLeft ? ifIcon : ifUser}</>;
};
