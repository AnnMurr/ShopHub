import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface TitleProps {
  id: number;
  title: string;
}

export const Title = ({ id, title }: TitleProps) => {
  return (
    <Box>
      <Box
        component={Link}
        to={`/product/${id}`}
        sx={{ color: (theme) => theme.palette.text.primary }}
      >
        <Typography variant="subtitle1" fontWeight={500}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
