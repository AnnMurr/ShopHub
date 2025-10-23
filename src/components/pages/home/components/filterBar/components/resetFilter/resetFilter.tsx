import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';

export const ResetFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleResetFilters = () => setSearchParams({});

  return (
    <Button
      onClick={handleResetFilters}
      sx={{
        color: (theme) => theme.palette.text.primary,
        borderRadius: '50px',
        textTransform: 'none',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <RestartAltOutlinedIcon fontSize="small" />
      <Typography sx={{ fontSize: '12px' }}>Reset All Filters</Typography>
    </Button>
  );
};
