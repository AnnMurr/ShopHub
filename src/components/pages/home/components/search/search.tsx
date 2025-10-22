import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams(searchValue.trim() ? { search: searchValue.trim() } : {});
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '80%',
        m: '90px auto 0 auto',
        '@media screen and (max-width: 760px)': {
          maxWidth: '100%',
        },
      }}
    >
      <InputBase
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        onClick={handleSearch}
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
