import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '4px',
        color: (theme) => theme.palette.text.primary,
      }}
    >
      SHOPHUB
    </Typography>
  );
};
