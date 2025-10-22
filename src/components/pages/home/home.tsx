import Box from '@mui/material/Box';

import { CardList } from './components/cardList/cardList';
import { FilterBar } from './components/filterBar/filterBar';
import { Search } from './components/search/search';

import { Container } from '@/components/shared/container/container';

const Home = () => {
  return (
    <Box component="section">
      <Container>
        <Search />
        <FilterBar />
        <CardList />
      </Container>
    </Box>
  );
};

export default Home;
