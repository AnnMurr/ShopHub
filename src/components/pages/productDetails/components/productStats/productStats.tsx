import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import { ButtonComponent } from '@/components/shared/button/button';
import { addItem } from '@/redux/cartSlice';
import { ProductType } from '@/types/products';
import { formatPrice } from '@/utils/formatPrice';

interface ProductStatsProps {
  data: ProductType;
}

export const ProductStats = ({ data }: ProductStatsProps) => {
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(data));

  return (
    <Box
      sx={{
        maxWidth: '300px',
        width: '100%',
        order: '3',

        '@media (max-width: 1024px)': {
          pt: '30px',
          maxWidth: '400px',
          m: '0 auto',
        },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {formatPrice(data.price)}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        p="10px 0"
      >
        <Typography component="span" sx={{ fontWeight: 600 }}>
          Rating
        </Typography>
        <Rating
          sx={{ color: '#000' }}
          size="small"
          name="half-rating"
          defaultValue={data.rating}
          precision={0.5}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" pb="15px">
        {data.reviews.length} reviews
      </Typography>
      <ButtonComponent
        handleClick={addProductToCart}
        type="button"
        text="Buy"
      />
    </Box>
  );
};
