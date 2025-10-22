import { ProductType } from '@/types/products';

interface ProductImage {
  data: ProductType;
}

export const ProductImage = ({ data }: ProductImage) => {
  return (
    <div className="product-details__image-wrapper">
      <img src={data.images[0]} alt={data.title} />
    </div>
  );
};
