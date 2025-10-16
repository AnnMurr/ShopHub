import { OrderCard } from "./components/orderCard/orderCard";
import { CartItem } from "../../../../../types/cart";
import Box from "@mui/material/Box";

interface CardsBoxProps {
    items: Array<CartItem>,
}

export const CardsBox = ({ items }: CardsBoxProps) => {
    return (
        <Box width="100%" pr="60px" component="ul">
            {items.map((item, i) => (
                <OrderCard key={i} data={item} />
            ))}
        </Box>
    )
}