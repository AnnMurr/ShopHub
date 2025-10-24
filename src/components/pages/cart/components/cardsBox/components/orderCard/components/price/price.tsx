import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatPrice } from '@/utils/formatPrice';

interface PriceProps {
  price: number;
  quantity: number;
}

export const Price = ({ price, quantity }: PriceProps) => {
  return (
    <Box
      sx={{
        minWidth: '80px',
        textAlign: 'right',
        mx: '16px',

        '@media (max-width: 650px)': {
          textAlign: 'left',
        },
      }}
    >
      <Typography fontWeight={500}>{formatPrice(price * quantity)}</Typography>
    </Box>
  );
};
