import Box from '@mui/material/Box';

interface ImageProps {
  image: string;
  alt: string;
}

export const Image = ({ image, alt }: ImageProps) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '300px' }}>
      <Box
        sx={{ objectFit: 'contain' }}
        component="img"
        src={image}
        alt={alt}
      />
    </Box>
  );
};
