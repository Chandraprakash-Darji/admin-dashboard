// Imports:
import {
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
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    Tooltip,
    Typography,
} from "@mui/material";

interface Props {
    /**
     * Whether the sidebar is open or not.
     */
    drawerOpen: boolean;
}
const UserProfile = ({ drawerOpen }: Props) => {
    return (
        <>
            <Tooltip
                title={
                    drawerOpen ? "" : <Typography>chandraprakash</Typography>
                }
                placement="right"
            >
                <ListItem
                    sx={{
                        px: ".5rem",
                    }}
                    disablePadding
                >
                    <ListItemButton
                        className={`w-full rounded-xl overflow-hidden mt-2  ${
                            drawerOpen ? "flex-col pt-6 pb-3 mb-2" : "p-0 py-2"
                        }`}
                        sx={{
                            /**
                             * If drawer is open then added border and hover, focus state has no background change
                             */
                            ...(drawerOpen && {
                                borderColor: "primary.main",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                "&:hover,&:focus-visible": {
                                    bgcolor: "rgba(0, 0, 0, 0)",
                                },
                            }),
                        }}
                        disableRipple
                    >
                        {/* Banner for User */}
                        {drawerOpen && (
                            <img
                                src="https://user-images.githubusercontent.com/93640141/154883570-4886fb9e-8a31-4eae-bd99-5f4b70d9c44b.png"
                                alt="banner"
                                className="w-full absolute top-0 left-0 h-24 object-cover"
                            />
                        )}
                        {/* User Avatar */}
                        <ListItemAvatar
                            tabIndex={-1}
                            className="flex justify-center items-center"
                        >
                            <Avatar
                                alt="Chandraprakash Darji"
                                tabIndex={-1}
                                {...{
                                    src: "https://www.github.com/Chandraprakash-Darji.png",
                                }}
                                sx={{
                                    fontWeight: "bold",
                                    width: drawerOpen ? "100px" : "40px",
                                    height: drawerOpen ? "100px" : "40px",
                                    fontSize: drawerOpen ? "3rem" : "1.2rem",
                                }}
                            >
                                CP
                            </Avatar>
                        </ListItemAvatar>
                        {/* Other User content */}
                        <div
                            className={`text-center  ${
                                drawerOpen
                                    ? "opacity-100 w-auto h-auto"
                                    : "opacity-0 overflow-hidden hidden"
                            }`}
                        >
                            {/* Name */}
                            <Typography
                                tabIndex={0}
                                className="overflow-hidden text-ellipsis font-bold text-lg"
                                sx={{
                                    "&:hover,&:focus": {
                                        color: "primary.main",
                                        outline: "none",
                                    },
                                }}
                            >
                                Chandraprakash
                            </Typography>
                            {/* Enrollment Number */}
                            <Typography className="text-xs">
                                21C22004
                            </Typography>
                            {/* course */}
                            <Typography className="text-xs whitespace-nowrap">
                                B.Tech In Computer Science &<br /> Engineering
                                (Artificial Intelligence)
                            </Typography>
                            {/* List of Social media */}
                            <Box
                                mt={1}
                                display="flex"
                                flexWrap="nowrap"
                                sx={{
                                    ".MuiIconButton-root:hover,.MuiIconButton-root:focus-visible":
                                        {
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
                </ListItem>
            </Tooltip>
        </>
    );
};

export default UserProfile;
