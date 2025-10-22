import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ButtonComponent } from '../../../../reusable/button/button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { formatPrice } from '../../../../../utils/formatPrice';

export const Info = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <Box
      sx={{
        '@media (max-width: 1024px)': {
          bgcolor: 'transparent',
          maxWidth: '100%',
          borderTop: '1px solid #e0e0e0',
          marginTop: '40px',
        },
      }}
      height="fit-content"
      bgcolor="#fafafa"
      p="40px"
      maxWidth="360px"
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #e0e0e0"
        pb="20px"
      >
        <Typography variant="h5">Total price</Typography>
        <Typography fontSize="20px" variant="caption">
          {totalPrice && formatPrice(totalPrice)}
        </Typography>
      </Box>
      <Box pt="40px">
        <ButtonComponent type="button" text="Order" />
      </Box>
    </Box>
  );
};
