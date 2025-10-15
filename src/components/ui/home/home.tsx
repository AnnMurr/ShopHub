import { Container } from "../../shared/container/container";
import { CardList } from "./components/cardList/cardList";
import { FilterBar } from "./components/filterBar/filterBar";
import { Search } from "./components/search/search";

const Home = () => {
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

export default Home;