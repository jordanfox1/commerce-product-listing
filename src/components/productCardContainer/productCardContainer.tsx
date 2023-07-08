import { Product } from '../../types/product.interface';
import { ProductCard } from '../productCard/productCard';
import { JSX } from 'react';
import './productCardContainer.css';

interface ProductCardContainerProps {
  productList: Product[];
}

export const ProductCardContainer = ({ productList }: ProductCardContainerProps): JSX.Element => {
  return (
    <section className="product-card-container">
      {productList.map((product) => (
        <ProductCard key={product.productName} product={product} data-testid={`product-card`} />
      ))}
    </section>
  );
};