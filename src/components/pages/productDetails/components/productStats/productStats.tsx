import Rating from '@mui/material/Rating';
import { ProductType } from '../../../../../types/products';
import { ButtonComponent } from '../../../../shared/button/button';
import { formatPrice } from '../../../../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../../redux/cartSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ProductStatsProps {
  data: ProductType;
}

export const ProductStats = ({ data }: ProductStatsProps) => {
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(data));

  return (
    <Box className="product-details__stats">
      <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
        {formatPrice(data.price)}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        p="10px 0"
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
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
