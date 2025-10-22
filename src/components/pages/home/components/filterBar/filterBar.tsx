import Box from '@mui/material/Box';

import { AppliedFiltersBox } from './components/appliedFiltersBox/appliedFiltersBox';
import { CategoryFilter } from './components/categoryFilter/categoryFilter';
import { PriceFilter } from './components/priceFilter/priceFilter';
import { ResetFilter } from './components/resetFilter/resetFilter';

export const FilterBar = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: '60px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <CategoryFilter />
          <PriceFilter />
        </Box>
        <ResetFilter />
      </Box>
      <AppliedFiltersBox />
    </>
  );
};
