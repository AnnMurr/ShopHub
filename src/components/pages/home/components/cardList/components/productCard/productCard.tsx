import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Button } from './components/button/button';
import { Image } from './components/image/image';
import { Price } from './components/price/price';
import { Title } from './components/title/title';

import { ProductType } from '@/types/products';

interface ProductCardProps {
  data: ProductType;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: '7px',
        p: '16px',
        minHeight: '500px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      }}
      component="li"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          pb: '25px',
        }}
        component={Link}
        to={`/product/${data.id}`}
      >
        <Image image={data.images[0]} alt={data.title} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: '1',
            pt: '10px',
          }}
        >
          <Title text={data.title} />
          <Box>
            <Rating
              size="small"
              name="read-only"
              value={data.rating}
              readOnly
            />
            <Price value={data.price} />
          </Box>
        </Box>
      </Box>
      <Button data={data} />
    </Box>
  );
};
