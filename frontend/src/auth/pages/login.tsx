import { Box, Button, Grid, Icon, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../core/assets/icons/Logo";
import Bg from "../../core/assets/images/Bg.jpg";

const Login = () => {
    return (
        <Grid container className="h-screen overflow-hidden text-inherit">
            <Grid item className="hidden md:block md:w-1/3 lg:w-1/2">
                <img
                    src={Bg}
                    className="object-cover object-bottom h-screen w-full"
                    alt="background"
                />
            </Grid>
            <Grid
                item
                className="h-screen flex-1 flex justify-center items-center"
            >
                <Box className="w-[25rem] flex flex-col justify-center items-center">
                    <Icon color="primary" className="w-28 h-28 mb-2">
                        <Logo />
                    </Icon>

                    <Typography
                        variant="h3"
                        align="center"
                        color="textPrimary"
                        className="font-bold"
                    >
                        Login
                    </Typography>
                    <Box component="form" marginTop={3} noValidate>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Box sx={{ textAlign: "right" }}>
                            <Typography
                                component={Link}
                                sx={{
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                                to="/forgot-password"
                                color="primary"
                            >
                                Forgot Password
                            </Typography>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                p: 2,
                                bgcolor: "primary.main",
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
