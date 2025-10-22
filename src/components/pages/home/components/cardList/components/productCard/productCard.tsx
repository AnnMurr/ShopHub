import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ButtonComponent } from '@/components/shared/button/button';
import { addItem } from '@/redux/cartSlice';
import { ProductType } from '@/types/products';
import { formatPrice } from '@/utils/formatPrice';

interface ProductCardProps {
  data: ProductType;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(data));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e0e0e0',
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
        <Box sx={{ display: 'flex', minHeight: '300px' }}>
          <Box
            sx={{ objectFit: 'contain' }}
            component="img"
            src={data.images[0]}
            alt={data.title}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: '1',
            pt: '10px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#000',

                '@media (max-width: 640px)': {
                  fontSize: '18px',
                },
              }}
              variant="h5"
            >
              {data.title}
            </Typography>
          </Box>
          <Box>
            <Rating
              sx={{ color: '#000' }}
              size="small"
              name="read-only"
              value={data.rating}
              readOnly
            />
            <Box>
              <Typography
                component="span"
                sx={{ fontSize: '14px', color: '#000' }}
              >
                {formatPrice(data.price)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <ButtonComponent
          handleClick={addProductToCart}
          type="button"
          text="Buy"
        />
      </Box>
    </Box>
  );
};
