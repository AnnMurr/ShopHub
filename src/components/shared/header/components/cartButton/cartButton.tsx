import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

export const CartButton = () => {
  const quantity: number | null = useSelector(
    (state: RootState) => state.cart.quantity,
  );

  return (
    <Badge
      badgeContent={quantity ? quantity : 0}
      sx={{
        '& .MuiBadge-badge': {
          color: '#fff',
          backgroundColor: '#000',
        },
      }}
    >
      <IconButton
        sx={{
          padding: '0',
          color: 'black',
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
