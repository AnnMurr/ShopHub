import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { ProductImage } from './components/productImage/productImage';
import { ProductInfo } from './components/productInfo/productInfo';
import { ProductReviews } from './components/productReviews/productReviews.lazy';
import { ProductStats } from './components/productStats/productStats';

import { Container } from '@/components/shared/container/container';
import { Spinner } from '@/components/shared/spinner/spinner';
import { useGetSingleProductQuery } from '@/services/productsApi';
import './productDetails.css';

const ProductNotFound = () => {
  return <div>Product not found</div>;
};

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <ProductNotFound />;

  const { data } = useGetSingleProductQuery(Number(id));

  return (
    <>
      {data ? (
        <section className="product-details">
          <Container>
            <div className="product-details__wrapper">
              <div className="product-details__top-block">
                <ProductInfo data={data} />
                <ProductImage data={data} />
                <ProductStats data={data} />
              </div>
              <Suspense fallback={<Spinner />}>
                <ProductReviews data={data} />
              </Suspense>
            </div>
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};
