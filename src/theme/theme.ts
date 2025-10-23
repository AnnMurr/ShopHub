import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000000',
      secondary: '#3f3d3a',
    },
    background: {
      paper: '#fafafa',
    },
    divider: '#e0e0e0',
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
      dark: '#333333',
    },
  },
});
