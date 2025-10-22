import { CardList } from './components/cardList/cardList';
import { FilterBar } from './components/filterBar/filterBar';
import { Search } from './components/search/search';

import { Container } from '@/components/shared/container/container';

const Home = () => {
  return (
    <section>
      <Container>
        <Search />
        <FilterBar />
        <CardList />
      </Container>
    </section>
  );
};

export default Home;
