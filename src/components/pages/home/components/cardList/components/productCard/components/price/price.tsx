import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatPrice } from '@/utils/formatPrice';

interface PriceProps {
  value: number;
}

export const Price = ({ value }: PriceProps) => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontSize: '14px',
          color: (theme) => theme.palette.text.primary,
        }}
      >
        {formatPrice(value)}
      </Typography>
    </Box>
  );
};
