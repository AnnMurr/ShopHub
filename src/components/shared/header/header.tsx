import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { logout } from "../../../redux/authSlice";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const Header = () => {
    const userData = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => dispatch(logout());

    return (
        <AppBar sx={{
            backgroundColor: "transparent",
            color: "black"
        }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                        }}
                    >
                        SHOPHUB
                    </Typography>
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 2, alignItems: "center" }}>
                        <ShoppingBagOutlinedIcon />
                        {userData ?
                            (<Button onClick={handleLogout} type="button" variant="contained" fullWidth disableElevation>
                                Log out
                            </Button>)
                            :
                            (<IconButton
                                sx={{
                                    padding: "0",
                                    color: "black"
                                }}
                                aria-label="login"
                                component={Link} to="/login">
                                <AccountCircleOutlinedIcon />
                            </IconButton>)
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}