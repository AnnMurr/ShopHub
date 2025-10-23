import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { ReviewType } from '@/types/products';

interface CommentBlockProps {
  data: ReviewType;
}

export const CommentBlock = ({ data }: CommentBlockProps) => {
  return (
    <Paper style={{ padding: '40px 20px', borderRadius: '0' }}>
      <Grid container wrap="nowrap">
        <Grid width="100%" justifyContent="space-between" display="flex">
          <Box>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '600' }}
              variant="h4"
            >
              {data.reviewerName}
            </Typography>
            <Typography>{data.comment}</Typography>
          </Box>
          <Box>
            <Rating
              sx={{ color: (theme) => theme.palette.text.primary }}
              size="small"
              name="read-only"
              value={data.rating}
              readOnly
            />
          </Box>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ marginTop: '30px' }} />
    </Paper>
  );
};
