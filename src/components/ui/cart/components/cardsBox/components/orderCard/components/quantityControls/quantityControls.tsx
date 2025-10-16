import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface QuantityControlsProps {
    quantity: number
}

export const QuantityControls = ({ quantity }: QuantityControlsProps) => {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small" >
                <RemoveIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton size="small">
                <AddIcon />
            </IconButton>
        </Box>
    )
}