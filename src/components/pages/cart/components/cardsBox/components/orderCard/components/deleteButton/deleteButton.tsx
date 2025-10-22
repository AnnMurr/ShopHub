import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';

import { deleteItem } from '@/redux/cartSlice';
import { AppDispatch } from '@/redux/store';

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <IconButton onClick={handleDelete}>
      <DeleteOutlineOutlinedIcon />
    </IconButton>
  );
};
