import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Title = () => {
  return (
    <Box
      sx={{
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }}
      pb="40px"
    >
      <Typography variant="h4">Cart</Typography>
    </Box>
  );
};
