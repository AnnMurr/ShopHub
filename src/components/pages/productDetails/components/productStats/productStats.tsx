import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonComponent } from '@/components/shared/button/button';
import { QuantityControls } from '@/components/shared/quantityControls/quantityControls';
import { addItem } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';
import { ProductType } from '@/types/products';
import { formatPrice } from '@/utils/formatPrice';

interface ProductStatsProps {
  data: ProductType;
}

export const ProductStats = ({ data }: ProductStatsProps) => {
  const cartData = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(data));

  const selectedItem = cartData.find((item) => item.id === data.id);

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
          sx={{ color: (theme) => theme.palette.text.primary }}
          size="small"
          name="half-rating"
          defaultValue={data.rating}
          precision={0.5}
        />
      </Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.text.secondary,
          pb: '15px',
        }}
        variant="body2"
      >
        {data.reviews.length} reviews
      </Typography>
      <Box>
        {selectedItem ? (
          <QuantityControls
            quantity={selectedItem.quantity}
            id={selectedItem.id}
          />
        ) : (
          <ButtonComponent
            handleClick={addProductToCart}
            type="button"
            text="Add to cart"
          />
        )}
      </Box>
    </Box>
  );
};
