import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../../../../redux/store';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../../../../../../../../redux/cartSlice';

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
      <IconButton onClick={handleDecrease} size="small">
        <RemoveIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={handleIncrease} size="small">
        <AddIcon />
      </IconButton>
    </Box>
  );
};
