import Button from '@mui/material/Button';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { useSearchParams } from 'react-router-dom';

export const ResetFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleResetFilters = () => setSearchParams({});

  return (
    <Button
      onClick={handleResetFilters}
      color="inherit"
      sx={{
        borderRadius: '2rem',
        textTransform: 'none',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <RestartAltOutlinedIcon fontSize="small" />
      Reset All Filters
    </Button>
  );
};
