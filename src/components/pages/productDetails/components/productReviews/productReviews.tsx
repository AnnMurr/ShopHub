import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CommentBlock } from './components/commentBlock/commentBlock';

import { ProductType } from '@/types/products';

interface ProductReviewsProps {
  data: ProductType;
}

const ProductReviews = ({ data }: ProductReviewsProps) => {
  return (
    <Box
      sx={{
        p: '160px 0 90px 0',

        '@media (max-width: 640px)': {
          p: '90px 0',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', pb: '60px' }}>
        <Typography sx={{ fontSize: '30px' }} variant="h2">
          {data.title} reviews
        </Typography>
      </Box>
      {data.reviews.map((info, i) => (
        <CommentBlock key={i} data={info} />
      ))}
    </Box>
  );
};

export default ProductReviews;
