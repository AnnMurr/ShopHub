import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export const Header = () => {
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
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                        <ShoppingBagIcon />
                        <IconButton
                            sx={{
                                padding: "0",
                                color: "black"
                            }}
                            component={Link} to="/login">
                            <AccountCircleIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}