import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import { CardsBox } from './components/cardsBox/cardsBox';
import { EmptyState } from './components/emptyState/emptyState';
import { Info } from './components/info/info';
import { Title } from './components/title/title';

import { Container } from '@/components/shared/container/container';
import { RootState } from '@/redux/store';
import { CartItem } from '@/types/cart';

const Cart = () => {
  const items: Array<CartItem> = useSelector(
    (state: RootState) => state.cart.items,
  );

  return (
    <Container>
      {items.length ? (
        <>
          <Title />
          <Box
            display="flex"
            justifyContent="space-between"
            p="60px 0"
            sx={{
              '@media (max-width: 1024px)': {
                flexDirection: 'column',
              },
            }}
          >
            <CardsBox items={items} />
            <Info />
          </Box>
        </>
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};

export default Cart;
