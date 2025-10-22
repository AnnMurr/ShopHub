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
      minWidth={80}
      textAlign="right"
      mx={2}
      sx={{
        '@media (max-width: 650px)': {
          textAlign: 'left',
        },
      }}
    >
      <Typography fontWeight={500}>{formatPrice(price * quantity)}</Typography>
    </Box>
  );
};
