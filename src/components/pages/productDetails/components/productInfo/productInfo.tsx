import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ProductType } from '@/types/products';

interface ProductInfoProps {
  data: ProductType;
}

export const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        textAlign: 'left',
        order: 2,
        display: 'flex',
        flexDirection: 'column',

        '@media (max-width: 1024px)': {
          maxWidth: '100%',
          alignItems: 'center',
          textAlign: 'center',
          m: '0 auto',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '34px',

          '@media (max-width: 600px)': {
            fontSize: '25px',
          },
        }}
        variant="h4"
      >
        {data.title}
      </Typography>
      <Box p="20px 0">
        <Typography
          sx={{
            fontSize: '18px',
            color: (theme) => theme.palette.text.secondary,

            '@media (max-width: 600px)': {
              fontSize: '16px',
            },
          }}
        >
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
