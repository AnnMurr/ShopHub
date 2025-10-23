import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonComponent } from '@/components/shared/button/button';
import { QuantityControls } from '@/components/shared/quantityControls/quantityControls';
import { addItem } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';
import { ProductType } from '@/types/products';

interface ProductCardProps {
  data: ProductType;
}

export const Button = ({ data }: ProductCardProps) => {
  const cartData = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(data));

  const selectedItem = cartData.find((item) => item.id === data.id);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
  );
};
