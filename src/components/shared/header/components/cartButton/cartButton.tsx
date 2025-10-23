import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '@/redux/store';

export const CartButton = () => {
  const quantity: number | null = useSelector(
    (state: RootState) => state.cart.quantity,
  );

  return (
    <Badge badgeContent={quantity ? quantity : 0} color="primary">
      <IconButton
        sx={{
          padding: '0',
          color: (theme) => theme.palette.text.primary,
        }}
        aria-label="login"
        component={Link}
        to="/cart"
      >
        <ShoppingBagOutlinedIcon />
      </IconButton>
    </Badge>
  );
};
