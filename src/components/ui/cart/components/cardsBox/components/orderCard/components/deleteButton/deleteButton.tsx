import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../../../../redux/store";
import { deleteItem } from "../../../../../../../../../redux/cartSlice";

interface DeleteButtonProps {
    id: number
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = () => {
        dispatch(deleteItem(id));
    }
    
    return (
        <IconButton onClick={handleDelete}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    )
}