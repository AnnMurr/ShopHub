import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Box from "@mui/material/Box";

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
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SHOPHUB
                    </Typography>
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                        <AccountCircleIcon />
                        <ShoppingBagIcon />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}