import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import { Button } from './components/button/button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../redux/cartSlice';
import { AppDispatch } from '../../../redux/store';

interface QuantityControlsProps {
  quantity: number;
  id: number;
}

export const QuantityControls = ({ quantity, id }: QuantityControlsProps) => {
  const dispath = useDispatch<AppDispatch>();

  const handleIncrease = () => dispath(increaseItemQuantity(id));

  const handleDecrease = () => dispath(decreaseItemQuantity(id));

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Button handleClick={handleDecrease} Icon={RemoveIcon} />
      <Typography>{quantity}</Typography>
      <Button handleClick={handleIncrease} Icon={AddIcon} />
    </Box>
  );
};
