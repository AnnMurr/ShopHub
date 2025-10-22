import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ProductType } from '@/types/products';

interface ProductInfoProps {
  data: ProductType;
}

export const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      order="2"
      sx={{
        maxWidth: 300,
        textAlign: 'left',

        '@media (max-width:1024px)': {
          maxWidth: '100%',
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Typography variant="h4">{data.title}</Typography>
      <Box p="20px 0">
        <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: '#3f3d3a' }}>
          {data.description}
        </Typography>
      </Box>
      <Box>
        <Box
          component="img"
          src={data.meta.qrCode}
          alt="qrCode"
          width={100}
          height={100}
          loading="lazy"
        />
      </Box>
    </Box>
  );
};
