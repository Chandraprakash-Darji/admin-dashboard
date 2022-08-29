import { Box, Button, Grid, Icon, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo";

const Login = () => {
    return (
        <Grid
            container
            className="h-screen over den text-inherit"
            columns={{ xs: 1, md: 12 }}
        >
            <Grid item xs={0} md={4} lg={8}>
                <img
                    src="/login/bg.jpg"
                    className="object-cover object-bottom h-screen w-full"
                    alt="background"
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
                lg={4}
                className="h-screen flex justify-center items-center"
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
