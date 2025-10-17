import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CardsBox } from "./components/cardsBox/cardsBox"
import { EmptyState } from "./components/emptyState/emptyState"
import { CartItem } from "../../../types/cart";
import { Info } from "./components/info/info";
import { Container } from "../../shared/container/container";
import { Title } from "./components/title/title";
import Box from "@mui/material/Box";

const Cart = () => {
    const items: Array<CartItem> = useSelector((state: RootState) => state.cart.items);

    return (
        <Container>
            {items.length ?
                <>
                    <Title />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        p="60px 0"
                        sx={{
                            "@media (max-width: 1024px)": {
                                flexDirection: "column"
                            }
                        }}
                    >
                        <CardsBox items={items} />
                        <Info />
                    </Box>
                </>
                :
                <EmptyState />
            }
        </Container>
    )
}

export default Cart