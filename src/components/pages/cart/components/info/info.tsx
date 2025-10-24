import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import { ButtonComponent } from '@/components/shared/button/button';
import { RootState } from '@/redux/store';
import { formatPrice } from '@/utils/formatPrice';

export const Info = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        height: 'fit-content',
        p: '40px',
        maxWidth: '360px',
        width: '100%',

        '@media (max-width: 1024px)': {
          bgcolor: 'transparent',
          maxWidth: '100%',
          borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
          marginTop: '40px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: '20px',

          borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h5">Total price</Typography>
        <Typography fontSize="20px" variant="caption">
          {totalPrice && formatPrice(totalPrice)}
        </Typography>
      </Box>
      <Box pt="40px">
        <ButtonComponent type="button" text="Order" />
      </Box>
    </Box>
  );
};
