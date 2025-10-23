import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '20px',
          color: (theme) => theme.palette.text.primary,

          '@media (max-width: 640px)': {
            fontSize: '18px',
          },
        }}
        variant="h5"
      >
        {text}
      </Typography>
    </Box>
  );
};
