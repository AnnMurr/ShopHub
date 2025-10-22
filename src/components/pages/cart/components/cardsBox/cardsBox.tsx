import Box from '@mui/material/Box';

import { OrderCard } from './components/orderCard/orderCard';

import { CartItem } from '@/types/cart';

interface CardsBoxProps {
  items: Array<CartItem>;
}

export const CardsBox = ({ items }: CardsBoxProps) => {
  return (
    <Box
      sx={{
        '@media (max-width: 1024px)': {
          pr: '0',
        },
      }}
      width="100%"
      pr="60px"
      component="ul"
    >
      {items.map((item, i) => (
        <OrderCard key={i} data={item} />
      ))}
    </Box>
  );
};
