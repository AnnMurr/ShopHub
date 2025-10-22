import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { EmptyState } from './components/emptyState/emptyState';
import { PaginationBar } from './components/pagination/pagination';
import { ProductCard } from './components/productCard/productCard';

import { Spinner } from '@/components/shared/spinner/spinner';
import { useGetProductsQuery } from '@/services/productsApi';

export const CardList = () => {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || undefined;
  const order = (searchParams.get('order') as 'asc' | 'desc') || undefined;
  const category = searchParams.get('category') || undefined;
  const search = searchParams.get('search') || undefined;

  const { data, isLoading, isError } = useGetProductsQuery({
    sortBy,
    order,
    category,
    search,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  if (isLoading) return <Spinner />;
  if (isError) return <p>Failed to load products</p>;
  if (!data?.products?.length) return <EmptyState />;

  const pageSize = 12;
  const pageCount = Math.ceil(data.products.length / pageSize);

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const pageProducts = data.products.slice(firstIndex, lastIndex);

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
          pt: '90px',

          '@media (max-width: 650px)': {
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          },
        }}
        component="ul"
      >
        {pageProducts?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </Box>
      <PaginationBar
        handlePageChange={(e, page) => setCurrentPage(page)}
        count={pageCount}
        currentPage={currentPage}
      />
    </>
  );
};
