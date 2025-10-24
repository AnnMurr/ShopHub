import ImportExportIcon from '@mui/icons-material/ImportExport';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const PriceFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    const category = searchParams.get('category');

    category
      ? setSearchParams({ category: category, sortBy: 'price', order: order })
      : setSearchParams({ sortBy: 'price', order: order });

    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          id="fade-button"
          onClick={handleClick}
          sx={{
            padding: 0,
            color: (theme) => theme.palette.text.primary,
          }}
          aria-label="sort products by price"
        >
          <ImportExportIcon />
        </IconButton>
      </Box>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleSort('asc')}>Cheapest first</MenuItem>
        <MenuItem onClick={() => handleSort('desc')}>
          Most expensive first
        </MenuItem>
      </Menu>
    </>
  );
};
