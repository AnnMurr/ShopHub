import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

import { DeleteButton } from './components/deleteButton/deleteButton';
import { Image } from './components/image/image';
import { Price } from './components/price/price';
import { Title } from './components/title/title';
import { QuantityControls } from '../../../../../../shared/quantityControls/quantityControls';

import { CartItem } from '@/types/cart';

interface OrderCardProps {
  data: CartItem;
}

export const OrderCard = ({ data }: OrderCardProps) => {
  return (
    <Box
      component="li"
      sx={{
        p: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,

        '@media (max-width: 650px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
        },
      }}
    >
      <Box display="flex" alignItems="center" gap="16px">
        <Image id={data.id} imageLink={data.image} alt={data.title} />
        <Title id={data.id} title={data.title} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',

          '@media (min-width: 651px)': {
            marginLeft: 'auto',
          },
          '@media (max-width: 650px)': {
            flexDirection: 'column-reverse',
          },
        }}
      >
        <QuantityControls id={data.id} quantity={data.quantity} />
        <Price quantity={data.quantity} price={data.price} />
      </Box>
      <Box
        sx={{
          '@media (max-width: 650px)': {
            marginLeft: 'auto',
          },
        }}
      >
        <DeleteButton id={data.id} />
      </Box>
    </Box>
  );
};
