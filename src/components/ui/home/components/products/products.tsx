import { Container } from "../../../../shared/container/container";
import { FilterBar } from "../filterBar/filterBar";
import { CardList } from "./components/cardList/cardList";
import { Search } from "./components/search/search";

export const Products = () => {
    return (
        <section>
            <Container>
                <Search />
                <FilterBar />
                <CardList />
            </Container>
        </section>
    )
}