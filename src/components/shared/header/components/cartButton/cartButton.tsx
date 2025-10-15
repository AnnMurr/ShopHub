import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const CartButton = () => {
    return (
        <Badge badgeContent={4} sx={{
            "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#000"
            }
        }}>
            <IconButton
                sx={{
                    padding: "0",
                    color: "black"
                }}
                aria-label="login"
                component={Link} to="/">
                <ShoppingBagOutlinedIcon />
            </IconButton>
        </Badge>
    )
}