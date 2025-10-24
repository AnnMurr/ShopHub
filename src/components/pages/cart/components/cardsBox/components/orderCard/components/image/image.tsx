import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface ImageProps {
  imageLink: string;
  alt: string;
  id: number;
}

export const Image = ({ imageLink, alt, id }: ImageProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Box
        loading="lazy"
        component="img"
        src={imageLink}
        alt={alt}
        sx={{ width: 80, height: 80, objectFit: 'cover', mr: '16px' }}
      />
    </Link>
  );
};
