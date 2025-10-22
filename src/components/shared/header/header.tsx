import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import { CartButton } from './components/cartButton/cartButton';
import { LoginButton } from './components/loginButton/loginButton';
import { Logo } from './components/logo/logo';

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#fff',
        color: 'black',
        position: 'fixed',
        zIndex: '9',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <CartButton />
            <LoginButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
