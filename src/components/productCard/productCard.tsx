import { JSX } from 'react';
import { Product } from '../../types/product.interface';
import './productCard.css'
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  return (
    <article role="product-card" className="product-card">
      {product.isSale && <span>Sale!</span>}

      <figure >
        <img className="product-image" width={200} height={200} src={product.productImage} alt="A picture of the listed product" />
      </figure>

      <div className="product-details">
        <p>{product.productName} | <b>{product.price}</b></p>
      </div>
    </article>
  );
};
