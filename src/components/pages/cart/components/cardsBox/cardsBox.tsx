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
        width: '100%',
        pr: '60px',

        '@media (max-width: 1024px)': {
          pr: '0',
        },
      }}
      component="ul"
    >
      {items.map((item) => (
        <OrderCard key={item.id} data={item} />
      ))}
    </Box>
  );
};
