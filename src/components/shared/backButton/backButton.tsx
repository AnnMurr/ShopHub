import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: '40px' }}>
      <IconButton onClick={() => navigate(-1)} sx={{ p: 0 }} color="primary">
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
};
