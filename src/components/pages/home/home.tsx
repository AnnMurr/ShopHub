import Box from '@mui/material/Box';

import { CardList } from './components/cardList/cardList';
import { FilterBar } from './components/filterBar/filterBar';
import { Search } from './components/search/search';

import { Container } from '@/components/shared/container/container';

const Home = () => {
  return (
    <Box component="section">
      <Container>
        <Box sx={{ pt: '160px' }}>
          <Search />
          <FilterBar />
          <CardList />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
