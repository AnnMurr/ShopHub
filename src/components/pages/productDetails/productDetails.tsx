import Box from '@mui/material/Box';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { ProductImage } from './components/productImage/productImage';
import { ProductInfo } from './components/productInfo/productInfo';
import { ProductReviews } from './components/productReviews/productReviews.lazy';
import { ProductStats } from './components/productStats/productStats';

import { Container } from '@/components/shared/container/container';
import { Spinner } from '@/components/shared/spinner/spinner';
import { useGetSingleProductQuery } from '@/services/productsApi';

const ProductNotFound = () => {
  return <Box>Product not found</Box>;
};

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <ProductNotFound />;

  const { data } = useGetSingleProductQuery(Number(id));

  return (
    <>
      {data ? (
        <Box component="section">
          <Container>
            <Box
              sx={{
                pt: '160px',

                '@media (max-width: 600px)': {
                  pt: '60px',
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}
                >
                  <ProductInfo data={data} />
                  <ProductImage data={data} />
                  <ProductStats data={data} />
                </Box>
                <Suspense fallback={<Spinner />}>
                  <ProductReviews data={data} />
                </Suspense>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : (
        <Spinner />
      )}
    </>
  );
};
