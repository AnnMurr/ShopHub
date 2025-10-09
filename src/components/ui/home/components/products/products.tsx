import { Container } from "../../../../shared/container/container";
import { CardList } from "./components/cardList/cardList";
import { Search } from "./components/search/search";

export const Products = () => {
    return (
        <section>
            <Container>
                <Search />
                <CardList />
            </Container>
        </section>
    )
}