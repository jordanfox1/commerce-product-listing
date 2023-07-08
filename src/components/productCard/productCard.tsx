import { JSX } from 'react';
import { Product } from '../../types/product.interface';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  return (
    <article role="product-card" className="product-card">
      {product.isSale && <span>Sale</span>}

      <figure className="product-image">
        <img src={product.productImage} alt="A picture of the listed product" />
      </figure>

      <div className="product-details">
        <p>{product.productName}</p>
        <p>{`${product.price}`}</p>
      </div>
    </article>
  );
};
