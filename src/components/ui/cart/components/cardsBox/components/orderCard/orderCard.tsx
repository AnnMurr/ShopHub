import Box from "@mui/material/Box"
import { CartItem } from "../../../../../../../types/cart";
import { Image } from "./components/image/image";
import { Title } from "./components/title/title";
import { QuantityControls } from "./components/quantityControls/quantityControls";
import { Price } from "./components/price/price";
import { DeleteButton } from "./components/deleteButton/deleteButton";

interface OrderCardProps {
    data: CartItem,
}
export const OrderCard = ({ data }: OrderCardProps) => {
    return (
        <Box
            component="li"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            borderBottom="1px solid #e0e0e0"
            bgcolor="#fff"
        >
            <Image id={data.id} imageLink={data.image} alt={data.title} />
            <Title id={data.id} title={data.title} />
            <QuantityControls quantity={data.quantity} />
            <Price quantity={data.quantity} price={data.price} />
            <DeleteButton />
        </Box>
    )
}