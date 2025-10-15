import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Logo } from "./components/logo/logo";
import { CartButton } from "./components/cartButton/cartButton";
import { LoginButton } from "./components/loginButton/loginButton";

const Header = () => {
    return (
        <AppBar
            sx={{
                backgroundColor: "transparent",
                color: "black"
            }}
            position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    <Box sx={{ marginLeft: "auto", display: "flex", gap: 2, alignItems: "center" }}>
                        <CartButton />
                        <LoginButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;