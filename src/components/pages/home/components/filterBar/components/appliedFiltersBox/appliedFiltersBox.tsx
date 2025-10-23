import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ResetFilter } from '../resetFilter/resetFilter';

interface ActiveFilter {
  type: string;
  text: string;
}

export const AppliedFiltersBox = () => {
  const [filters, setFilters] = useState<Array<ActiveFilter>>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get('order');
    const category = searchParams.get('category');

    const activeFilters = [
      category && { type: 'category', text: category },
      order && {
        type: 'order',
        text: order === 'asc' ? 'Cheapest first' : 'Most expensive first',
      },
    ].filter((cat) => cat) as Array<ActiveFilter>;

    setFilters(activeFilters);
  }, [searchParams]);

  const resetFilter = (type: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (type === 'order') {
      newParams.delete('order');
      newParams.delete('sortBy');
    } else {
      newParams.delete(type);
    }

    setSearchParams(newParams);
  };

  if (!filters.length) return null;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      gap={1}
      sx={{ mt: 1 }}
    >
      {filters.map((filter, i) => (
        <Box
          key={i}
          sx={{
            borderRadius: '50px',
            p: '3px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            sx={{
              textTransform: 'capitalize',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            {filter.text}
          </Typography>
          <IconButton
            onClick={() => resetFilter(filter.type)}
            size="small"
            sx={{ p: 0 }}
          >
            <ClearOutlinedIcon color="primary" fontSize="small" />
          </IconButton>
        </Box>
      ))}
      <ResetFilter />
    </Stack>
  );
};
