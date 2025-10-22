import Box from '@mui/material/Box';

import { ProductType } from '@/types/products';

interface ProductImage {
  data: ProductType;
}

export const ProductImage = ({ data }: ProductImage) => {
  return (
    <Box
      sx={{
        maxWidth: '400px',
        order: '2',
        flex: '1 1 33%',
        m: '0 auto',

        '@media (max-width: 1024px)': {
          order: '1',
        },
      }}
    >
      <Box component="img" src={data.images[0]} alt={data.title} />
    </Box>
  );
};
