import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      setSearchParams(searchValue.trim() ? { search: searchValue.trim() } : {});
    }, 300);

    return () => clearTimeout(handleSearch);
  }, [searchValue]);

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        p: '6px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '80%',
        mx: 'auto',

        '@media (max-width: 760px)': {
          maxWidth: '100%',
        },
      }}
    >
      <InputBase
        value={searchValue}
        onChange={handleOnChange}
        sx={{ ml: '8px', flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton onClick={() => setSearchValue('')}>
        <ClearOutlinedIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};
